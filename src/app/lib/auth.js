import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

export function generateToken(userId) {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '100h' });
}
export async function getTokenCookie(){
const tokenAwait = await cookies();
  const token = tokenAwait.get('authToken')?.value;
  return token;
}

export function verifyToken(token) {
   console.log("VERIFTOKEN",token)
  return jwt.verify(token, SECRET_KEY);
}
