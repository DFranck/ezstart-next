// src/middleware.ts

import { authMiddleware } from "@/middlewares/auth-middleware";
import intlMiddleware from "@/middlewares/intl-middleware";
import { NextRequest, NextResponse } from "next/server";
import { userAgentMiddleware } from "./middlewares/user-agent-middleware";

// Primary middleware to handle HTTP requests, internationalization, authentication and user agent.
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

  // Handle user agent
  const userAgentResponse = userAgentMiddleware(req);

  // Create response with headers from intl and user agent middlewares
  const response = NextResponse.next({
    headers: intlResponse.headers,
  });

  // Add custom headers
  response.headers.set("x-locale", intlResponse.headers.get("x-locale") || "");
  response.headers.set(
    "x-device-type",
    userAgentResponse.headers.get("x-device-type") || ""
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  methods: ["GET", "POST", "PATCH"],
};
