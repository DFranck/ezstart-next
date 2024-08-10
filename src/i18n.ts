// src/i18n.ts

import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale } from './types/locales';

// List of supported locales
export const locales: Locale[] = ['en', 'fr'];
// Default locale if none is specified
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Check if the requested locale is supported
  if (!locales.includes(locale as Locale)) notFound();
  // Load the corresponding locale messages
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
