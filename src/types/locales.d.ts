// src/types/locales.d.ts

export const locales = ['en', 'fr'] as const;

// Define type for locales
export type Locale = (typeof locales)[string];
