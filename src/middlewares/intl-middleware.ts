// src/middlewares/intl-middleware.ts
import { locales } from "@/i18n";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const defaultLocale = "en";
export let currentLocale = defaultLocale;
export const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  const response = intlMiddleware(req);
  const pathname = req.nextUrl.pathname;
  currentLocale =
    locales.find((loc) => pathname.startsWith(`/${loc}`)) || defaultLocale;
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
