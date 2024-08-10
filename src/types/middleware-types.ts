// src\types\middleware-types.ts
import { NextRequest, NextResponse } from 'next/server';

export type MiddlewareRequest = NextRequest;
export type MiddlewareResponse = NextResponse;

export type IntlMiddlewareConfig = {
  locales: string[];
  defaultLocale: string;
  alternateLinks?: boolean;
  localeDetection?: boolean;
  pathnames?: Record<string, string>;
};
