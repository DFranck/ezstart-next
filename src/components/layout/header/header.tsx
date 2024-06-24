"use client";

import { cn } from "@/lib/utils";
import Logo from "./logo";
import NavBurger from "./nav-burger";
import Navigation from "./navigation";
import UserActions from "./user-actions";

const Header = () => {
  return (
    <header className={cn("p-2 bg-primary/20 text-primary-foreground")}>
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto ">
        <Logo />
        <Navigation />
        <div className="flex">
          <UserActions />
          <NavBurger />
        </div>
      </div>
    </header>
  );
};
export default Header;
