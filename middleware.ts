import { NextResponse } from 'next/server'

// The public z8a.com site is offline at Zeda's request (2026-10-07): every
// public route answers 404 and asks search engines to drop it. The embedded
// Sanity Studio stays reachable (behind Sanity login) so content can still be
// edited. To bring the site back, delete this file and redeploy.
export function middleware() {
  return new NextResponse('Not Found', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow',
      'cache-control': 'no-store',
    },
  })
}

export const config = {
  // Everything except the Studio and the static assets it loads.
  matcher: ['/((?!studio|_next/static|_next/image).*)'],
}
