// src/i18n.ts

// This file configures the language management for the application.
// It uses next-intl to load localization messages and validate the selected locale.

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "fr"];
export const defaultLocale = "en";
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
