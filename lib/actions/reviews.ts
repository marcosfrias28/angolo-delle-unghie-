"use server";

import db from '../db/drizzle';
import { reviews as reviewsdb } from '../db/schema';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function getReviews() {
    try {
        const reviews = await db.select().from(reviewsdb);
        return reviews.map(review => review);
    } catch (error) {
        console.error('Errore nel recupero delle recensioni:', error);
        return [];
    }
}

export async function submitReview(formData: FormData) {
    let name = formData.get('name') as string;
    const body = formData.get('body') as string;
    const rating = formData.get('rating') as string;
    const isAnonymous = formData.get('isAnonymous') === 'on';

    if (!body || Number(rating) < 1 || Number(rating) > 5) {
        return { error: 'Inserisci una recensione valida e una valutazione tra 1 e 5.' };
    }
    if (isAnonymous) name = 'Anonim@';

    try {
        const Cookies = cookies()
        Cookies.set(name, `${name},${body},${rating}`, { expires: 365 });
        console.log(Cookies.get(name));

        await db.insert(reviewsdb).values({
            name,
            body,
            rating,
            status: 'idle',
            created_at: new Date() as unknown as Date,
        });
        revalidatePath('/');
        return { success: true, message: 'La tua recensione è stata inviata con successo.' };
    } catch (error) {
        console.error('Errore durante l\'invio della recensione:', error);
        return { error: 'Errore interno: impossibile inviare la recensione.' };
    }
}
