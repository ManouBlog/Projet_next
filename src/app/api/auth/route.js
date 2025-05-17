import { cookies } from 'next/headers'

export async function GET() {
      const cookieStore = await cookies()
  const token = cookieStore.get('authToken')

  return new Response(null, {
    status: token?.value ? 200 : 401
  })
}