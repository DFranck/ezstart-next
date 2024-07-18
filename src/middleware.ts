// src/middleware.ts
import { authMiddleware } from "@/middlewares/auth-middleware";
import intlMiddleware from "@/middlewares/intl-middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Ignore manifest.json and similar requests
  if (req.nextUrl.pathname.includes("manifest.json")) {
    return NextResponse.next();
  }

  // Handle internationalization
  const intlResponse = intlMiddleware(req);
  if (intlResponse.status !== 200) {
    return intlResponse;
  }

  // Handle authentication
  const authResponse = await authMiddleware(req);
  if (authResponse.status !== 200) {
    return authResponse;
  }

  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
