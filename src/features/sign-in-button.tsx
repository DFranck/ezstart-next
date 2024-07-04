import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
const SignInLink = () => {
  const locale = useLocale();
  const t = useTranslations("Components.SignInLink");
  return (
    <Button asChild className="">
      <Link href={`/${locale}/auth/signin`}>
        <LogIn className="mr-2 w-4" />
        <span className="sr-only">{t("description")}</span>
        {t("title")}
      </Link>
    </Button>
  );
};

export default SignInLink;
