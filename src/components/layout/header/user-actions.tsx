"use client";

import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";

const UserActions = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const cta = t("cta");
  useEffect(() => setMounted(true), []);

  return (
    <div className="md:flex items-center">
      {cta && (
        <Button asChild className="mx-2">
          <Link href={`/${locale}/checkout/cart`}>
            <span className="hidden md:flex">{cta}</span>
          </Link>
        </Button>
      )}
      <div className="hidden md:flex justify-center gap-2">
        {mounted && (
          <>
            <LocaleSwitcher />
            <ThemeSwitcher />
          </>
        )}
      </div>
    </div>
  );
};

export default UserActions;
