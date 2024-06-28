"use client";

import NavBurger from "@/components/layout/nav/nav-burger";
import useOnScroll from "@/hooks/useOnScroll";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import Nav from "../nav/nav";
import Logo from "./logo";
import UserActions from "./user-actions";
import UserConnexion from "./user-connexion";

const Header = ({ className }: { className?: string }) => {
  const scrollY = useOnScroll();
  return (
    <header
      className={cn("p-6 z-10 w-full", className, {
        "p-2 bg-background border-b shadow": scrollY > 0,
      })}
    >
      <div className="flex justify-between md:grid md:grid-cols-3  items-center max-w-screen-2xl mx-auto text-foreground">
        <Logo />
        <Nav
          t={"Header"}
          render={"links"}
          root={[0]}
          dir={"row"}
          className="hidden md:flex"
        />
        <div className="hidden md:flex justify-end gap-2">
          <UserActions />
          <UserConnexion />
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
        <NavBurger />
      </div>
    </header>
  );
};
export default Header;
