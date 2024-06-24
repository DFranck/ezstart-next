// src/middlewares/auth-middleware.ts
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const locale = req.headers.get("x-localization") || "en"; // Default to 'en' if not set

  // Allow public paths
  if (pathname.startsWith(`/${locale}`)) {
    return NextResponse.next();
  }

  // Add security logic for other paths
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET as string,
    salt: process.env.AUTH_SALT as string,
  });

  // Check permissions based on the locale
  if (!token) {
    const redirectUrl = new URL(`/${locale}/auth/signin`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
