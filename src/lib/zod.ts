import { object, string, z } from "zod";

export const signInSchema = object({
  email: string({ required_error: "emailRequired" })
    .min(1, "emailRequired")
    .email("invalidEmail"),
  password: string({ required_error: "passwordRequired" })
    .min(1, "passwordRequired")
    .min(8, "passwordMin")
    .max(32, "passwordMax"),
});

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "emailRequired" })
      .email({ message: "invalidEmail" }),
    password: z
      .string()
      .min(8, { message: "passwordMin" })
      .max(32, { message: "passwordMax" }),
    confirmPassword: z
      .string()
      .min(8, { message: "passwordMin" })
      .max(32, { message: "passwordMax" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsdonotmatch",
    path: ["confirmPassword"],
  });

export const nameSchema = object({
  name: string({ required_error: "nameRequired" }).min(1, "nameRequired"),
});

export const emailSchema = object({
  email: string({ required_error: "emailRequired" })
    .min(1, "emailRequired")
    .email("invalidEmail"),
});

export const passwordSchema = object({
  password: string({ required_error: "passwordRequired" })
    .min(1, "passwordRequired")
    .min(8, "passwordMin")
    .max(32, "passwordMax"),
});
