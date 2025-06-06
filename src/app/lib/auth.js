import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

export function generateToken(userId) {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
}

export function verifyToken(token) {
   console.log("VERIFTOKEN",token)
  return jwt.verify(token, SECRET_KEY);
}