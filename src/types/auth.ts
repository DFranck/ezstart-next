// src/types/auth.ts

import { NextRequest } from "next/server";

export interface TokenParams {
  req: NextRequest;
  secret: string;
  secureCookie: boolean;
  salt?: string;
}
