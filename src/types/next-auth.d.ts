// src\types\next-auth.d.ts

// Typical types defined here:
// - Extensions of the default NextAuth interfaces to add additional properties
// - Authentication-specific types, such as user roles

import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role?: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}
