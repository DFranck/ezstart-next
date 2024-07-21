// src\types\index.d.ts

// Typical types defined here:
// - Interfaces representing main entities of the project (e.g., User, Session)
// - Common types used throughout the application

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  image?: string;
  emailVerified?: Date | null;
}

export interface Session {
  user: User;
  expires: string;
}
