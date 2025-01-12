"use server"

import { eq } from "drizzle-orm"
import db from "../db/drizzle"
import { appointments, availableAppointments } from "../db/schema"

export async function getAvailableAppointments() {
    try {
        const slots = await db.select().from(availableAppointments).where(eq(availableAppointments.status, 'available'))
        return slots.map(slot => ({
            date: slot.appointmentDate!.toISOString().split('T')[0],
            time: slot.appointmentDate!.toISOString().split('T')[1].substring(0, 5),
            id: slot.id
        }))
    } catch (error) {
        console.error('Errore nel recupero degli appuntamenti disponibili:', error)
        throw new Error('Impossibile recuperare gli appuntamenti disponibili')
    }
}

export async function getAppointments(user_id: number) {
    try {
        const appointmentss = await db.select().from(appointments).where(eq(appointments.userId, user_id))
        return appointmentss.map(appointment => ({
            id: appointment.id,
            userId: appointment.userId,
            date: appointment.appointmentDate!.toLocaleDateString().split('T')[0],
            time: appointment.appointmentDate!.toLocaleDateString().split('T')[1].substring(0, 5),
            status: appointment.status
        }))
    } catch (error) {
        console.error('Errore nel recupero degli appuntamenti disponibili:', error)
        throw new Error('Impossibile recuperare gli appuntamenti disponibili')
    }
}

export async function bookAppointment(slotId: number, userId: number) {
    try {
        const slot = await db.select().from(availableAppointments).where(eq(availableAppointments.id, slotId)).limit(1)
        if (slot.length === 0 || slot[0].status !== 'available') {
            throw new Error('Slot non disponibile')
        }

        await db.transaction(async (tx) => {
            await tx.update(availableAppointments)
                .set({ status: 'booked' })
                .where(eq(availableAppointments.id, slotId))

            await tx.insert(appointments).values({
                userId,
                appointmentDate: slot[0].appointmentDate,
                status: 'confirmed',
                serviceType: 'default'
            })
        })

        // Invia email di conferma
        // TODO: Aggiungere l'invio dell'email di conferma
        // await sendEmail(userId, 'Conferma Appuntamento', `Il tuo appuntamento per il ${slot[0].appointmentDate} è stato confermato.`)

        return { success: true, message: 'Appuntamento prenotato con successo' }
    } catch (error) {
        console.error('Errore nella prenotazione dell\'appuntamento:', error)
        throw new Error('Impossibile prenotare l\'appuntamento')
    }
}

export async function deleteAppointment(id: number) {
    try {
        await db.delete(availableAppointments).where(eq(availableAppointments.id, id))
        return { success: true, message: 'Appuntamento eliminato con successo' }
    } catch (error) {
        console.error('Errore nella cancellazione dell\'appuntamento:', error)
        throw new Error('Impossibile cancellare l\'appuntamento')
    }
}

export async function addAppointmentSlot(date: string, time: string) {
    try {
        const appointmentDate = new Date(`${date}T${time}:00`)
        await db.insert(availableAppointments).values({
            appointmentDate,
            status: 'available'
        })
        return { success: true, message: 'Nuovo slot aggiunto con successo' }
    } catch (error) {
        console.error('Errore nell\'aggiunta del nuovo slot:', error)
        throw new Error('Impossibile aggiungere il nuovo slot')
    }
}