// pages/auth/signin.tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignInLink from "@/features/sign-in-button";
import { cn } from "@/lib/utils";
import { LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";

const UserConnexion = ({ className }: { className?: string }) => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const session = useSession();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const user = session.data?.user;
  const liStyle = "py-2 px-4 cursor-pointer hover:bg-accent text-sm";
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: `/${locale}/` });
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [isOpen]);
  if (user)
    return (
      <div className="relative" onBlur={handleBlur}>
        <Avatar
          className="cursor-pointer relative w-9 h-9"
          onClick={handleOpen}
          onKeyDown={handleKeyDown}
        >
          <AvatarImage src={"https://github.com/shadcn.png"} />
          <AvatarFallback>{user.name ?? ""}</AvatarFallback>
        </Avatar>
        {isOpen && (
          <ul
            ref={dropdownRef}
            tabIndex={-1}
            className={cn(
              "absolute top-10 p-2 right-0 z-10 bg-background border shadow rounded animate-fadeIn duration-200"
            )}
          >
            <li className="flex">
              {user.image ? (
                <Image
                  src={user.image}
                  width={50}
                  height={50}
                  alt={user.name ?? ""}
                />
              ) : (
                <Avatar
                  className="cursor-pointer relative w-9 h-9"
                  onClick={handleOpen}
                  onKeyDown={handleKeyDown}
                >
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                  <AvatarFallback>{user.name ?? ""}</AvatarFallback>
                </Avatar>
              )}
              {user.name ? ` ${user.name}` : ""}
              {user.email ? ` ${user.email}` : ""}
            </li>
            <li>
              <Settings />
              géter son compte
            </li>
            <div className="border border-border/50"></div>
            <Button className=" mt-2 w-full" onClick={handleSignOut}>
              <LogOut />
              <span className="">{t("logout")}</span>
            </Button>
          </ul>
        )}
      </div>
    );
  return (
    <div className={cn("items-center hidden md:flex", className)}>
      {!user && <SignInLink />}
    </div>
  );
};

export default UserConnexion;
