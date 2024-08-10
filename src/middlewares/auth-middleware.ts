// src/middlewares/auth-middleware.ts

import { Locale } from '@/types/locales';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { currentLocale } from './intl-middleware';

// Define paths in constants
const authPaths = (locale: Locale) => [
  `/${locale}/sign-in`,
  `/${locale}/sign-up`,
  `/${locale}/forgot-password`,
  `/${locale}/reset-password`,
  `/${locale}/verify-reset-code`,
  `/${locale}/update-name`,
  `/${locale}/update-roles`,
];

const visitPaths = (locale: Locale) => [
  `/${locale}/about`,
  `/${locale}/docs`,
  `/${locale}/unauthorized`,
  `/icons`,
];

const adminPaths = (locale: Locale) => [`/${locale}/admin`];

/**
 * Middleware to handle authentication for incoming requests.
 *
 * @param req - The incoming request object
 * @returns NextResponse with authentication handling
 */
export async function authMiddleware(req: NextRequest): Promise<NextResponse> {
  const locale = currentLocale;
  const pathname = req.nextUrl.pathname;

  const authPath = authPaths(locale);
  const visitPath = visitPaths(locale);
  const adminPath = adminPaths(locale);
  // const salt: string = process.env.AUTH_SALT ?? 'default-salt';

  const tokenParams: any = {
    req,
    secret: process.env.AUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === 'production',
    // salt,
  };

  const token = await getToken(tokenParams);
  console.log('Current Token:', token);

  // If no token is found, check if the path is allowed without authentication
  if (!token) {
    if (
      visitPath.some((path) => pathname.startsWith(path)) ||
      authPath.some((path) => pathname.startsWith(path)) ||
      pathname === `/${locale}`
    ) {
      console.log('Access allowed without authentication');
      return NextResponse.next();
    }
    console.log('Redirecting to sign-in');
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
  }

  // Redirect authenticated users from authentication paths to home
  if (authPath.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL(`/${locale}/`, req.url));
  }

  // Check if the user is accessing an admin path and if they have admin privileges
  if (adminPath.some((path) => pathname.startsWith(path))) {
    if (token.role !== 'admin') {
      console.log('Redirecting to unauthorized');
      return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
    }
  }

  console.log('Access allowed');
  return NextResponse.next();
}
