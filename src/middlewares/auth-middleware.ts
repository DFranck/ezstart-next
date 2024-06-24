// src/middleware/auth-middleware.ts
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Liste des chemins publics
  const publicPaths = ["/auth/signin", "/auth/signup"];

  // Vérifie si le chemin est public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Récupère le token
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET || "default-secret",
    salt: process.env.AUTH_SALT || "default-salt",
  });

  // Vérifie si le token est présent
  if (!token) {
    // Redirige vers la page de connexion si le token n'est pas présent
    const redirectUrl = new URL(`/auth/signin`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Exemple de vérification de rôles
  const isAdminRoute = pathname.startsWith("/admin");
  if (isAdminRoute && token.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }
  // Autorise l'accès si le token est présent
  return NextResponse.next();
}
