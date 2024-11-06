export const unsplash = async ({ query, per_page, page }: { query: String, per_page: number, page: number }) => {

    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=${per_page}&page=${page}`, {
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
        }
    })

    if (!res.ok) throw new Error("Something went wrong fetching images...")

    const data = await res.json();

    return data
}
