import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInSchema } from "./zod"; // Assurez-vous que le schéma Zod est correctement configuré

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        // Valider les données d'entrée avec Zod
        try {
          const parsedData = await signInSchema.parseAsync({ email, password });

          // Chercher l'utilisateur dans la base de données
          const user = await prisma.user.findUnique({
            where: { email: parsedData.email },
          });

          if (user && (await compare(parsedData.password, user.password))) {
            return { id: user.id, email: user.email, name: user.name }; // Adapter le retour pour correspondre à l'interface User de NextAuth
          }

          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  secret: process.env.AUTH_SECRET,
});
