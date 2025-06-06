import { generateToken } from '../../lib/auth';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request) {
  const { email } = await request.json();

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
    secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60
  });
  console.log("responseCONEXION",response)

  return response;
}

export async function DELETE() {
  (await cookies()).delete('authToken')
   return NextResponse.json(
    { success: true },
    { status: 200 }
  );
}