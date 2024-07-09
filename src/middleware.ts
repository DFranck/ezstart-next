// src/middleware.ts
import { authMiddleware } from "@/middlewares/auth-middleware";
import intlMiddleware from "@/middlewares/intl-middleware";
import { NextRequest } from "next/server";
export default async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse.status !== 200) {
    return intlResponse;
  }
  const authResponse = await authMiddleware(req);
  if (authResponse.status !== 200) {
    return authResponse;
  }
  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
