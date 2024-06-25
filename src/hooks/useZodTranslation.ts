import { useTranslations } from "next-intl";

export const useZodTranslation = () => {
  const t = useTranslations("App.Auth.Errors");

  return {
    t,
  };
};
