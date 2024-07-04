"use client";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Burger from "./burger";
import UserConnexion from "./layout/header/user-connexion";
import Nav from "./nav";
import UserAction from "./user-actions";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <header className="px-3 py-6 ">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/">
            <div className="flex items-center text-xl font-semibold">
              EzStart
            </div>
          </Link>
          <Nav className="hidden lg:flex" />
          <UserAction className="hidden lg:flex" />
          <div className="flex items-center gap-4">
            <Burger
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              className="block lg:hidden"
            />
            <UserConnexion />
          </div>
        </div>
        <div
          className={cn(
            "transition-all duration-500 ease-in-out overflow-hidden",
            { "max-h-0": !isOpen, "max-h-screen": isOpen }
          )}
        >
          <Nav />
          <UserAction setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
