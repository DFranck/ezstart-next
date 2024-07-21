// src\middlewares\auth-middleware.ts

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { currentLocale } from "./intl-middleware";

// Define paths in constants
const authPaths = (locale: string) => [
  `/${locale}/sign-in`,
  `/${locale}/sign-up`,
  `/${locale}/forgot-password`,
  `/${locale}/reset-password`,
  `/${locale}/verify-reset-code`,
  `/${locale}/update-name`,
  `/${locale}/update-roles`,
];

const visitPaths = (locale: string) => [
  `/${locale}/about`,
  `/${locale}/docs`,
  `/${locale}/unauthorized`,
  `/icons`,
];

const adminPaths = (locale: string) => [`/${locale}/admin`];

export async function authMiddleware(req: NextRequest) {
  const locale = currentLocale;
  const pathname = req.nextUrl.pathname;

  const authPath = authPaths(locale);
  const visitPath = visitPaths(locale);
  const adminPath = adminPaths(locale);

  const tokenParams: any = {
    req,
    secret: process.env.AUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === "production",
    // salt: (process.env.AUTH_SALT as string) || "default-salt",
  };

  const token = await getToken(tokenParams);
  if (!token) {
    if (
      visitPath.some((path) => pathname.startsWith(path)) ||
      authPath.some((path) => pathname.startsWith(path)) ||
      pathname === `/${locale}`
    ) {
      console.log("Access allowed without authentication");
      return NextResponse.next();
    }
    console.log("Redirecting to sign-in");
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
  }

  if (authPath.some((path) => pathname.startsWith(path))) {
    if (token.role === "admin") {
      console.log("Redirecting to dashboard for admin");
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
    } else {
      console.log("Redirecting to profile");
      return NextResponse.redirect(new URL(`/${locale}/profile`, req.url));
    }
  }

  if (adminPath.some((path) => pathname.startsWith(path))) {
    if (token.role !== "admin") {
      console.log("Redirecting to unauthorized");
      return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
    }
  }
  console.log("Access allowed");
  return NextResponse.next();
}
