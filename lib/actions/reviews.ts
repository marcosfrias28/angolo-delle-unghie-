"use server"

import { eq } from 'drizzle-orm'
import db from '../db/drizzle'
import { reviews as reviewsdb } from '../db/schema'

async function getReviews(userId: number) {
    try {
        const reviews = await db.select().from(reviewsdb).where(eq(reviewsdb.userId, userId))
        return reviews.map(review => ({
            id: review.id,
            content: review.comment,
            rating: review.rating,
            date: review.createdAt!.toISOString().split('T')[0]
        }))
    } catch (error) {
        console.error('Errore nel recupero delle recensioni:', error)
        throw new Error('Impossibile recuperare le recensioni')
    }
}


export default getReviews