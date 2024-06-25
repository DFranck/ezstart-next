import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "emailRequired" })
    .min(1, "emailRequired")
    .email("invalidEmail"),
  password: string({ required_error: "passwordRequired" })
    .min(1, "passwordRequired")
    .min(8, "passwordMin")
    .max(32, "passwordMax"),
});

export const signUpSchema = object({
  email: string({ required_error: "emailRequired" })
    .min(1, "emailRequired")
    .email("invalidEmail"),
  password: string({ required_error: "passwordRequired" })
    .min(1, "passwordRequired")
    .min(8, "passwordMin")
    .max(32, "passwordMax"),
});
