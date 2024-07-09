"use client";
import Burger from "@/components/layout/header/burger";
import Nav from "@/components/layout/header/nav";
import UserMenu from "@/components/layout/header/user-menu";
import useOnScroll from "@/hooks/useOnScroll";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UserAuthLinks from "./user-auth-links";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const scrollY = useOnScroll();
  const { data: session } = useSession();
  const user = session?.user;
  console.log(isOpen);
  return (
    <header
      className={cn("p-6 z-10 fixed w-full border-b", {
        "bg-background": isOpen || pathname !== `/${locale}`,
        "p-2 bg-background": scrollY > 0,
      })}
    >
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/">
            <div className="flex items-center text-xl font-semibold">
              EzStart
            </div>
          </Link>
          <Nav
            navClass="hidden lg:flex"
            t={"header"}
            render={"nav"}
            root={[0]}
            dir={"row"}
          />

          {!user && (
            <UserAuthLinks setIsOpen={setIsOpen} className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-2">
            {!user && (
              <>
                <LocaleSwitcher />
                <ThemeSwitcher />
              </>
            )}
            <Burger
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              className="block lg:hidden"
            />
            <UserMenu />
          </div>
        </div>
        <div
          className={cn(
            "transition-all duration-500 ease-in-out mt-2 lg:hidden overflow-hidden",
            { "max-h-0": !isOpen, "max-h-screen": isOpen }
          )}
        >
          <Nav
            navClass="bg-accent text-accent-foreground p-2 border-b border-primary"
            liClass="text-left p-2"
            t={"header"}
            render={"nav"}
            root={[0]}
            dir={"col"}
            variant={"primary"}
            setIsOpen={setIsOpen}
          />
          <Nav
            t="SideNav"
            navClass="bg-accent text-accent-foreground p-2 border-b border-primary"
            liClass="text-right p-2"
            render="links"
            path="docs"
            dir={"col"}
            active
            variant={"primary"}
            setIsOpen={setIsOpen}
          />
          {!user && <UserAuthLinks setIsOpen={setIsOpen} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
