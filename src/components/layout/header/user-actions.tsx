"use client";

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
          <Link href={`/${locale}/auth/signin`}>
            <span className="hidden md:flex">{cta}</span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default UserActions;
