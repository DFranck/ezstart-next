// src\types\type.d.ts

// Typical types defined here:
// - Interfaces representing specific data structures (e.g., AppMessages)
// - Types for managing messages or texts used in the application (e.g., Messages)

export interface AppMessages {
  appTitle: string;
  appDescription: string;
}

export interface Messages {
  app: AppMessages;
}
