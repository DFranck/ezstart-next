import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Crée le middleware de localisation
const intlMiddleware = createMiddleware({
  // Liste de toutes les locales supportées
  locales: ["en", "de"],
  // Utilisée lorsque aucune locale ne correspond
  defaultLocale: "en",
});

// Middleware combiné pour localisation et sécurité
export default async function middleware(req: NextRequest) {
  console.log("Middleware start");
  const { pathname, locale } = req.nextUrl;

  // Vérifie si le chemin est la racine ou s'il contient une locale
  if (
    pathname === "/" ||
    pathname.startsWith("/en") ||
    pathname.startsWith("/de")
  ) {
    console.log("Root or localized path, no auth required");
    return intlMiddleware(req);
  }

  // Ajoute la logique de sécurité pour les autres chemins
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET || "default-secret",
    salt: process.env.AUTH_SALT || "default-salt",
  });

  console.log(
    `Pathname: ${pathname}, Locale: ${locale}, Token: ${
      token ? "Present" : "Not Present"
    }`
  );

  // Autorise les demandes pour les pages publiques
  if (pathname.startsWith("/auth")) {
    console.log("Public page access");
    return intlMiddleware(req);
  }

  // Protéger les pages privées
  if (!token) {
    console.log("Redirecting to signin");
    // Conserver la locale dans l'URL de redirection
    const redirectUrl = new URL(`/auth/signin`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  console.log("Access granted");
  return intlMiddleware(req);
}

export const config = {
  // Correspond uniquement aux chemins internationalisés
  matcher: ["/", "/(de|en)/:path*"],
};
