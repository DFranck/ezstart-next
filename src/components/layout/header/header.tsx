"use client";

import NavBurger from "@/components/layout/nav-burger";
import useOnScroll from "@/hooks/useOnScroll";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import Nav from "../nav";
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
      <div className="flex justify-between  items-center max-w-screen-2xl mx-auto text-foreground">
        <Logo path={false} />
        <Nav
          t={"Header"}
          render={"links"}
          root={[0]}
          dir={"row"}
          navClass="hidden md:flex "
          ulClass="gap-4"
        />
        <div className="flex gap-2">
          <div className="hidden md:flex justify-end gap-2">
            <UserActions />
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
          <div className="flex gap-2">
            <NavBurger />
            <UserConnexion />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
