import { NextRequest, NextResponse } from "next/server"
import { JWTPayload } from "jose"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres"
import { and, eq } from "drizzle-orm"
import { users } from "@/lib/db/schema"
import { decrypt } from "./lib/token"

const db = drizzle(sql) // Configura la connessione al database.

export async function middleware(req: NextRequest) {
  let payload = null,
    username = null,
    password = null,
    user = null
  const url = new URL(req.url)
  const path = url.pathname
  const method = req.method

  if (path.startsWith("/api/user/login")) return NextResponse.next()

  const token = req.cookies.get("access-token")?.value // Estrae il token dalla richiesta.
  if (!token && path.startsWith("/admin/dashboard"))
    return NextResponse.redirect(new URL("/admin", req.url)) // Se non c'è token, reindirizza al login se sta cercando di accedere a una pagina protetta.

  try {
    payload = (await decrypt(token as string)) as JWTPayload
    username = payload?.username as string
    password = payload?.password as string

      // Verifica se l'utente esiste nel database con le credenziali del token.
      ;[user] = await db
        .select()
        .from(users)
        .where(
          and(
            eq(users.email, username),
            eq(users.passwordHash, password)
          )
        )
  } catch (error) {
    console.log(error)
  }
  if (user && path === "/admin")
    return NextResponse.redirect(new URL("/admin/dashboard", req.url)) // Reindirizza alla dashboard se l'utente è già autenticato.

  // Se l'utente non è autenticato e sta cercando di accedere a una pagina protetta
  if (!user && path.startsWith("/admin/dashboard"))
    return NextResponse.redirect(new URL("/admin", req.url))

  // Se l'utente non è autenticato e sta cercando di accedere a una rotta API
  if (!user && path.startsWith("/api") && method !== "GET")
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 }) // Risponde con un errore di autorizzazione.

  // Permette l'accesso alle altre rotte
  return NextResponse.next()
}

// Configura le rotte su cui il middleware deve essere applicato
export const config = {
  matcher: ["/admin/dashboard/:path*", "/api/:path*", "/admin"],
}
