// src/middleware.ts
import { authMiddleware } from "@/middlewares/auth-middleware";
import intlMiddleware from "@/middlewares/intl-middleware";
import { NextRequest, NextResponse } from "next/server";
import { userAgentMiddleware } from "./middlewares/user-agent-middleware";

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
  const userAgentResponse = userAgentMiddleware(req);

  const response = NextResponse.next({
    headers: intlResponse.headers,
  });

  // Add custom headers
  response.headers.set("x-locale", intlResponse.headers.get("x-locale") || "");
  response.headers.set(
    "x-device-type",
    userAgentResponse.headers.get("x-device-type") || ""
  );

  // Log for debugging purposes
  console.log(
    "Intl middleware response locale: ",
    intlResponse.headers.get("x-locale")
  );
  console.log(
    "User agent middleware response device type: ",
    userAgentResponse.headers.get("x-device-type")
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
