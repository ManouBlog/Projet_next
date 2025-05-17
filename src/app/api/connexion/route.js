import { generateToken } from '../../lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email) {
    return new Response('Invalid credentials', { status: 401 });
  }

  const token = generateToken(email);
  console.log("TOKEN GENERER",token)
  // Création de la réponse
  const response = NextResponse.json(
    { success: true },
    { status: 200 }
  );

  // Configuration des cookies
  response.cookies.set({
    name: 'authToken',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60,
    ...(process.env.NODE_ENV === 'production' && { 
      domain: '.votresite.com' 
    })
  });

  return response;
}