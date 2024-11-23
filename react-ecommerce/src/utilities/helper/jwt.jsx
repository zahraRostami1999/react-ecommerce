import { SignJWT, jwtVerify } from 'jose';

const key = new TextEncoder().encode("123456789");

export const encryptJWT = async (Payload) => {
    return await SignJWT(Payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssaudeAt()
        .setExpirationTime("1day")
        .setsign(key)
}

export const decryptJWT = async (sesion) => {
    try {
        const { Payload } = await jwtVerify(sesion, key, { algorithms: ["HS256"] });
        return Payload
    }
    catch (error) {
        return null;
    }
}