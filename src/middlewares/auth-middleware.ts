import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { currentLocale } from "./intl-middleware";

export async function authMiddleware(req: NextRequest) {
  const locale = currentLocale;
  const pathname = req.nextUrl.pathname;

  const authPath = [
    // paths unauthorized if logged in
    `/${locale}/sign-in`,
    `/${locale}/sign-up`,
    `/${locale}/forgot-password`,
    `/${locale}/reset-password`,
    `/${locale}/verify-reset-code`,
    `/${locale}/update-name`,
    `/${locale}/update-roles`,
  ];
  const visitPath = [
    // paths always authorized
    `/${locale}/about`,
    `/${locale}/docs`,
    `/${locale}/unauthorized`,
  ];

  const adminPath = [
    // paths for admin
    `/${locale}/admin`,
  ];
  const tokenParams: any = {
    req,
    secret: process.env.AUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === "production",
  };
  const token = await getToken(tokenParams);
  if (!token) {
    if (
      visitPath.some((path) => pathname.startsWith(path)) ||
      authPath.some((path) => pathname.startsWith(path)) ||
      pathname === `/${locale}`
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
  }
  if (authPath.some((path) => pathname.startsWith(path))) {
    if (token.role === "admin") {
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
    } else {
      return NextResponse.redirect(new URL(`/${locale}/profile`, req.url));
    }
  }

  if (adminPath.some((path) => pathname.startsWith(path))) {
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
    }
  }
  return NextResponse.next();
}
