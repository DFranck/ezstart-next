// src/middlewares/auth-middleware.ts
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { currentLocale } from "./intl-middleware";

export async function authMiddleware(req: NextRequest) {
  const locale = currentLocale;
  const pathname = req.nextUrl.pathname;

  // Log cookies to ensure they are being passed correctly
  // console.log("Cookies:", req.cookies);

  // Get the token
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET as string,
    // salt: process.env.AUTH_SALT as string,
    // secureCookie: process.env.NODE_ENV === "production",
  });

  // Redirect to signin if no token is present
  if (!token) {
    console.log("No token found, redirecting to signin.");
    if (
      pathname.startsWith(`/${locale}/auth`) ||
      pathname === `/${locale}` ||
      pathname === `/${locale}/about` ||
      pathname.startsWith(`/${locale}/docs`)
    ) {
      return NextResponse.next();
    }
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
  console.log("Token is valid, proceeding with request.");
  return NextResponse.next();
}
