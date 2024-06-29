import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { currentLocale } from "./intl-middleware";

export async function authMiddleware(req: NextRequest) {
  const locale = currentLocale;
  const pathname = req.nextUrl.pathname;

  // Préparer les paramètres pour getToken
  const tokenParams: any = {
    req,
    secret: process.env.AUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === "production",
  };

  // // Inclure conditionnellement le salt si défini
  // if (process.env.AUTH_SALT) {
  //   tokenParams.salt = process.env.AUTH_SALT as string;
  // }

  // Obtenir le token
  const token = await getToken(tokenParams);
  console.log("token", token);

  // Rediriger vers la page de connexion si aucun token n'est présent
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

  // Vérifier l'accès basé sur les rôles
  if (pathname.startsWith(`/${locale}/admin`) && token.role !== "admin") {
    console.log("Not an admin, redirecting to unauthorized");
    return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
  }

  // Autoriser l'accès aux autres chemins si authentifié
  console.log("Token is valid, proceeding with request.");
  return NextResponse.next();
}
