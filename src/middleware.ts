// src/middleware.ts
import { authMiddleware } from "@/middlewares/auth-middleware";
import intlMiddleware from "@/middlewares/intl-middleware";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const intlResponse = await intlMiddleware(req);
  const authResponse = await authMiddleware(req);

  if (authResponse.status === 302) {
    return authResponse;
  }
  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
