// pages/auth/signin.tsx
"use client";

import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../../ui/button";

const UserConnexion = ({ className }: { className?: string }) => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const session = useSession();
  const user = session.data?.user;
  console.log(session);

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: `/${locale}/` });
  };

  return (
    <div className={cn("md:flex items-center", className)}>
      {!user && (
        <>
          <Button asChild className="mx-2">
            <Link href={`/${locale}/auth/signin`}>
              <span className="">{t("signin")}</span>
            </Link>
          </Button>
          {/* <Button asChild className="mx-2">
            <Link href={`/${locale}/auth/signup`}>
              <span className="hidden md:flex">{t("signup")}</span>
            </Link>
          </Button> */}
        </>
      )}
      {user && (
        <Button className="mx-2" onClick={handleSignOut}>
          <span className="hidden md:flex">{t("logout")}</span>
        </Button>
      )}
    </div>
  );
};

export default UserConnexion;
