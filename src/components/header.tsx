"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Burger from "./burger";
import Nav from "./nav";
import UserAction from "./user-actions";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-3 py-6 ">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-wrap items-center justify-between">
          <a href="/">
            <div className="flex items-center text-xl font-semibold">
              <svg
                className="mr-1 size-8 stroke-current stroke-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
              SaaS Template
            </div>
          </a>
          <Burger onclick={() => setIsOpen(!isOpen)} />
        </div>
        <div
          className={cn(
            "transition-all duration-1000 ease-in-out overflow-hidden",
            { "max-h-0": !isOpen, "max-h-screen": isOpen }
          )}
        >
          <Nav />
          <UserAction />
        </div>
      </div>
    </div>
  );
};

export default Header;
