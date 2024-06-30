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
        console.log("trying credentials signIn", credentials);
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
      // Add user information to token on sign in
      if (user) {
        token.name = user.name || "";
        token.email = user.email || "";
        token.role = user.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      // Pass user information to session object
      session.user.name = token.name || "";
      session.user.email = token.email || "";
      session.user.role = token.role || "user";
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Optional: Duration of session in seconds (default 30 days)
  },
});
