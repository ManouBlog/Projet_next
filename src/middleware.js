// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('authToken')?.value
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/DetailPerson') && !token) {
    const redirectUrl = new URL('/connexion', request.url)
    redirectUrl.searchParams.set('redirect', pathname) // Sauvegarde la page demandée
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/DetailPerson/:path*']
}