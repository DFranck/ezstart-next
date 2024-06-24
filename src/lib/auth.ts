import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { signInSchema } from "./zod"; // Assurez-vous que le schéma Zod est correctement configuré

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Valider les données d'entrée avec Zod
        try {
          const parsedData = await signInSchema.parseAsync(credentials);

          if (
            typeof parsedData.email !== "string" ||
            typeof parsedData.password !== "string"
          ) {
            throw new Error("Invalid credentials");
          }

          // Chercher l'utilisateur dans la base de données
          const user = await db.user.findUnique({
            where: { email: parsedData.email ?? "" }, // Utiliser une chaîne vide par défaut
          });

          if (user && (await compare(parsedData.password, user.password))) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            }; // Adapter le retour pour correspondre à l'interface User de NextAuth
          }

          throw new Error("Invalid email or password");
        } catch (error: any) {
          console.error(error);
          if (error.name === "ZodError") {
            throw new Error("Validation error");
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add role to token on sign in
      if (user) {
        const userFromDb = await db.user.findUnique({
          where: { email: user.email ?? "" }, // Utiliser une chaîne vide par défaut
        });
        token.role = userFromDb?.role || "user"; // Définit le rôle par défaut à "user" si aucun rôle n'est trouvé
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the role to the session object
      session.user.role = token.role as string;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
