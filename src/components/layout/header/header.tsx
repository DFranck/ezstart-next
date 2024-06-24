"use client";

import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import Logo from "./logo";
import NavBurger from "./nav-burger";
import Navigation from "./navigation";
import UserActions from "./user-actions";
import UserConnexion from "./user-connexion";

const Header = () => {
  return (
    <header className={cn("p-2 bg-primary/20 text-primary-foreground")}>
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto text-foreground">
        <Logo />
        <Navigation />
        <div className="hidden md:flex justify-center gap-2">
          <UserActions />
          <UserConnexion />
          <NavBurger />
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
export default Header;
