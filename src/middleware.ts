// src/middleware.ts
import { authMiddleware } from "@/middlewares/auth-middleware";
import intlMiddleware from "@/middlewares/intl-middleware";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const intlResponse = await intlMiddleware(req);

  if (intlResponse.status !== 200) {
    return intlResponse;
  }
  const authResponse = await authMiddleware(req);

  if (authResponse.status !== 200) {
    console.log("Unauthorized, redirecting");
    return authResponse;
  }
  console.log("Authorized");

  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
