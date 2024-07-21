// src\middlewares\intl-middleware.ts
import { locales } from "@/i18n";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
export let currentLocale = defaultLocale;

export const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // Exclude static files in public folder from locale handling
  if (
    url.startsWith("/icons") ||
    url.startsWith("/docs") ||
    url.startsWith("/assets")
  ) {
    return NextResponse.next();
  }

  const response = intlMiddleware(req);
  const pathname = req.nextUrl.pathname;
  currentLocale =
    locales.find((loc) => pathname.startsWith(`/${loc}`)) || defaultLocale;

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons|docs|assets).*)",
  ],
};
