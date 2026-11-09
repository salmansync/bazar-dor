import { NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

export default function proxy(request) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/product/:path*'],
};
