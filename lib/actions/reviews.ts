"use server";

import db from '../db/drizzle';
import { reviews as reviewsdb, users } from '../db/schema';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { eq } from 'drizzle-orm';
import { verifyToken } from '../auth/session';
import { getUser } from '@/app/(auth)/actions';

export async function getReviews() {
    try {
        const reviews = await db.select().from(reviewsdb);
        return reviews
    } catch (error) {
        console.error('Errore nel recupero delle recensioni:', error);
        return [];
    }
}

export const moderateReview = async (data: { reviewsId: string[], action: 'accepted' | 'rejected' | 'delete' }) => {
    const { reviewsId, action: status } = data;

    try {
        const user = await getUser()
        if ((!user || user.role !== 'admin') && status !== 'delete') {
            return { error: 'Errore: Hai bisogno di essere Admin per modificare le recensioni...' };
        }
    } catch (error) {
        return { error: 'Errore interno: impossibile moderare la recensione.' };
    }

    try {
        if (status === 'delete') {
            reviewsId.map(async (reviewId: string) => {
                await db.delete(reviewsdb).where(eq(reviewsdb.id, Number(reviewId)));
            });
            revalidatePath('/');
            revalidatePath('/dashboard');
            return { success: true, message: 'Recensione/i eliminata/e con successo.' }
        } else {
            reviewsId.map(async (reviewId: string) => {
                await db.update(reviewsdb).set({ status }).where(eq(reviewsdb.id, Number(reviewId)));
            });
            revalidatePath('/');
            revalidatePath('/dashboard');
            return { success: true, message: `Recensione/i ${status === 'accepted' ? 'Accettata/e' : 'Rifiutata/e'} con successo.` }
        }
    } catch (error) {
        console.error('Errore durante la moderazione della recensione:', error);
        return { error: 'Errore internxzo: impossibile moderare la recensione.' };
    }
}

export interface ReviewData {
    name: string | null;
    body: string;
    rating: number;
    isAnonymous: boolean | undefined;
}

export const submitReview = async (formData: ReviewData) => {
    let { name, body, rating, isAnonymous } = formData;

    let user_id, payload = null;

    if (!body || Number(rating) < 1 || Number(rating) > 5) {
        return { error: 'Inserisci una recensione valida e una valutazione tra 1 e 5.' };
    }

    // Get the user_id from the session token
    const header = cookies();
    const session = header.get('session');
    if (session?.value) payload = await verifyToken(session?.value);

    const [user] = await db.select().from(users).where(eq(users.id, Number(payload?.user.id))).limit(1)

    // If the user is not logged in, the review will be anonymous
    if (user) [user_id, name] = [user.id, user.name];

    if ((isAnonymous || !name) && !user.name) name = 'Anonim@';

    try {
        await db.insert(reviewsdb).values({
            name,
            body,
            rating: rating.toString(),
            status: 'idle',
            created_at: new Date() as Date,
            user_id,
        });
        revalidatePath('/');
        revalidatePath('/dashboard');
        return { success: true, message: 'La tua recensione è stata inviata con successo.' };
    } catch (error) {
        console.error('Errore durante l\'invio della recensione:', error);
        return { error: 'Errore interno: impossibile inviare la recensione.' };
    }
};
