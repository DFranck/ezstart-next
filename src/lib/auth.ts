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
        // console.log("trying credentials signIn", credentials);
        try {
          const parsedData = await signInSchema.parseAsync(credentials);

          if (
            typeof parsedData.email !== "string" ||
            typeof parsedData.password !== "string"
          ) {
            console.log("Invalid credentials");
            throw new Error("Invalid credentials");
          }

          console.log("parsedData", parsedData);
          const user = await db.user.findUnique({
            where: { email: parsedData.email ?? "" },
          });

          if (user && (await compare(parsedData.password, user.password))) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            };
          }

          console.log("Invalid email or password");
          throw new Error("Invalid email or password");
        } catch (error: any) {
          console.error("Error in authorize:", error);
          if (error.name === "ZodError") {
            throw new Error("Validation error");
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add role to token on sign in
      if (user) {
        const userFromDb = await db.user.findUnique({
          where: { email: user.email ?? "" }, // Utiliser une chaîne vide par défaut
        });

        token.role = userFromDb?.role; // Définit le rôle par défaut à "user" si aucun rôle n'est trouvé
      }
      // console.log("The token generated is:", token);
      return token;
    },
    async session({ session, token }) {
      // Pass the role to the session object
      session.user.role = token.role as string;
      // console.log("session", session);

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
