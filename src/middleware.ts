// src/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/auth-middleware";
import intlMiddleware from "./middlewares/intl-middleware";

export default async function middleware(req: NextRequest) {
  console.log("Middleware start");
  const { pathname } = req.nextUrl;

  // Vérifie si le chemin est la racine ou s'il contient une locale
  if (
    pathname === "/" ||
    pathname.startsWith("/en") ||
    pathname.startsWith("/de")
  ) {
    console.log("Root or localized path, no auth required");
    return intlMiddleware(req);
  }

  // Applique le middleware de sécurité pour les autres chemins
  const authResult = await authMiddleware(req);
  if (authResult !== NextResponse.next()) {
    return authResult;
  }

  // Applique le middleware de localisation
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
