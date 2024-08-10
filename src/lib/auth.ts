// src\lib\auth.ts
import { compare } from 'bcryptjs';
import NextAuth, { Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { db } from './db';
import { signInSchema } from './zod';

/**
 * NextAuth configuration for handling authentication.
 * Includes Google, GitHub, and Credentials providers.
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          // Validate credentials using zod schema
          const parsedData = await signInSchema.parseAsync(credentials);

          if (
            typeof parsedData.email !== 'string' ||
            typeof parsedData.password !== 'string'
          ) {
            throw new Error('Invalid credentials');
          }

          // Find user in database by email
          const user = await db.user.findUnique({
            where: { email: parsedData.email ?? '' },
          });

          // Compare password with stored hash
          if (user && (await compare(parsedData.password, user.password))) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            };
          }

          throw new Error('Invalid email or password');
        } catch (error: any) {
          console.error('Error in authorize:', error);
          if (error.name === 'ZodError') {
            throw new Error('Validation error');
          }
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update' && session) {
        return { ...token, ...session?.user };
      }
      if (user) {
        token.name = user.name || '';
        token.email = user.email || '';
        token.role = user.role || 'user';
        token.image = user.image || '';
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      session.user = {
        id: token.sub,
        name: token.name,
        email: token.email,
        role: token.role,
        image: token.image,
        emailVerified: token.emailVerified
          ? new Date(token.emailVerified)
          : null,
      } as User;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
