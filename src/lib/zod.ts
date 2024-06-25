import { useTranslations } from "next-intl";
import { object, string } from "zod";
export const useValidationSchemas = () => {
  const t = useTranslations("Errors");

  return {
    signInSchema: object({
      email: string({ required_error: t("emailRequired") })
        .min(1, t("emailRequired"))
        .email(t("invalidEmail")),
      password: string({ required_error: t("passwordRequired") })
        .min(1, t("passwordRequired"))
        .min(8, t("passwordMin"))
        .max(32, t("passwordMax")),
    }),

    signUpSchema: object({
      email: string({ required_error: t("emailRequired") })
        .min(1, t("emailRequired"))
        .email(t("invalidEmail")),
      password: string({ required_error: t("passwordRequired") })
        .min(1, t("passwordRequired"))
        .min(8, t("passwordMin"))
        .max(32, t("passwordMax")),
    }),
  };
};
