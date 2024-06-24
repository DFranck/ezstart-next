// src/middlewares/auth-middleware.ts
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { currentLocale } from "./intl-middleware";

export async function authMiddleware(req: NextRequest) {
  const locale = currentLocale;
  const pathname = req.nextUrl.pathname;

  // Get the token
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET as string,
    salt: process.env.AUTH_SALT as string,
  });
  console.log("token", token);

  // Redirect to signin if no token is present
  if (!token) {
    if (
      pathname.startsWith(`/${locale}/auth`) ||
      pathname === `/${locale}` ||
      pathname === `/${locale}/about`
    )
      return NextResponse.next();
    const redirectUrl = new URL(`/${locale}/auth/signin`, req.url);
    redirectUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Check for role-based access
  if (pathname.startsWith(`/${locale}/admin`) && token.role !== "admin") {
    console.log("Not an admin, redirecting to unauthorized");
    return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
  }

  // Allow access to other paths if authenticated
  return NextResponse.next();
}
