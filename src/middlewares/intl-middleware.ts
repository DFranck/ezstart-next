// src/middlewares/intl-middleware.ts
import { locales } from "@/i18n"; // Import locales from i18n.ts
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const defaultLocale = "en";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  const response = intlMiddleware(req);

  // Define a local authorization variable
  const locale = req.nextUrl.locale || defaultLocale;
  req.headers.set("x-localization", locale);

  return response;
}

export const config = {
  matcher: ["/", `/${locales}/:path*`],
};
