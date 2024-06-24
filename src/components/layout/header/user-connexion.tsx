// pages/auth/signin.tsx
"use client";

import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../../ui/button";

const UserConnexion = () => {
  const t = useTranslations("Header");
  const locale = useLocale();

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: `/${locale}/` });
  };

  return (
    <div className="md:flex items-center">
      <Button asChild className="mx-2">
        <Link href={`/${locale}/auth/signin`}>
          <span className="hidden md:flex">{t("signin")}</span>
        </Link>
      </Button>
      <Button asChild className="mx-2">
        <Link href={`/${locale}/auth/signup`}>
          <span className="hidden md:flex">{t("signup")}</span>
        </Link>
      </Button>
      <Button className="mx-2" onClick={handleSignOut}>
        <span className="hidden md:flex">{t("logout")}</span>
      </Button>
    </div>
  );
};

export default UserConnexion;
