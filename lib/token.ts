import { jwtVerify, SignJWT } from "jose"

const key = new TextEncoder().encode(process.env.JWT_SECRET)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setExpirationTime("1h") // Token valido per 10 minuti
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key)
}

export async function decrypt(tokenValue: string) {
  try {
    const { payload } = await jwtVerify(tokenValue, key, {
      algorithms: ["HS256"],
    })
    if (payload?.exp && payload?.exp < Date.now() / 1000) {
    }
    return payload
  } catch (error: any) {
    // IF TOKEN IS EXPIRED, RENEW IT AND RETURN THE PAYLOAD WITHOUT RELOGIN THE USER
    const newToken = await encrypt(error?.payload)
    const { payload } = await jwtVerify(newToken, key, {
      algorithms: ["HS256"],
    })
    return payload
  }
}
