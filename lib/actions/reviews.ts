"use server"

import { eq } from 'drizzle-orm'
import db from '../db/drizzle'
import { reviews as reviewsdb } from '../db/schema'
import { revalidatePath } from 'next/cache'

export async function getReviews() {
    try {
        const reviews = await db.select().from(reviewsdb)
        return reviews.map(review => ({
            body: review.body,
            name: review.name,
            rating: review.rating,
            date: review.createdAt!.toISOString().split('T')[0]
        }))
    } catch (error) {
        console.error('Errore nel recupero delle recensioni:', error)
        throw new Error('Impossibile recuperare le recensioni')
    }
}

export async function submitReview(formData: FormData) {
    const name = formData.get('name') as string
    const body = formData.get('body') as string
    const rating = formData.get('rating') as string
    const isAnonymous = formData.get('isAnonymous') === 'on'

    console.log(name, body, rating, isAnonymous)

    if (!body || Number(rating) < 1 || Number(rating) > 5 || !name) {
        return { error: 'Inserisci un nome, una recensione e una valutazione tra 1 e 5' }
    }

    try {
        await db.insert(reviewsdb).values({ // TODO: fix the name field
            name: isAnonymous ? 'Anonymous' : name || 'Anonymous',
            body,
            rating,
            createdAt: new Date() as unknown as Date,
        })
        revalidatePath('/')
        return { success: true }
    } catch (error) {
        console.error('Failed to submit review:', error)
        return { error: 'Failed to submit review' }
    }
}