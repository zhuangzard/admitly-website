import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simple password protection for MVP demo
  const basicAuth = request.headers.get('authorization');
  const url = request.nextUrl;

  // Skip auth for certain paths if needed
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Change these credentials for your demo
    if (user === 'demo' && pwd === 'admitly2024') {
      return NextResponse.next();
    }
  }

  url.pathname = '/api/auth';

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};