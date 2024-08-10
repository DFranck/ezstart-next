// src/middlewares/intl-middleware.ts

import { locales } from '@/i18n';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const defaultLocale = 'en';
export let currentLocale = defaultLocale;

export const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

/**
 * Middleware to handle locale settings for incoming requests.
 *
 * @param req - The incoming request object
 * @returns NextResponse with the appropriate locale settings
 */
export default function middleware(req: NextRequest): NextResponse {
  const url = req.nextUrl.pathname;

  // Exclude static files in public folder from locale handling
  if (
    url.startsWith('/icons') ||
    url.startsWith('/docs') ||
    url.startsWith('/assets') ||
    url === '/sw-registration.js' ||
    url === '/sw.js' ||
    url === '/workbox-fb90b81a.js' ||
    url === '/manifest.json'
  ) {
    return NextResponse.next();
  }

  // Handle internationalization
  const response = intlMiddleware(req);
  const pathname = req.nextUrl.pathname;

  // Set the current locale based on the request pathname
  currentLocale =
    locales.find((loc) => pathname.startsWith(`/${loc}`)) || defaultLocale;

  // Log the current locale for debugging purposes
  console.log(`Current Locale: ${currentLocale}`);

  return response;
}

// Configuration for the middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icons|docs|assets).*)',
  ],
};
