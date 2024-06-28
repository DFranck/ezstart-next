import SideNav from "@/components/layout/nav/side-nav";
import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import UserConnexion from "../header/user-connexion";
const NavBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const t = useTranslations("Header");
  const links = t.raw("links") as string[];
  const locale = useLocale();
  const linkStyle =
    "p-6 hover:bg-accent rounded w-full text-center cursor-pointer block";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className="md:hidden rounded p-2" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 z-20 border shadow bg-background animate-slideInFromRight duration-200"
          id="burger-menu"
        >
          <div className="inset-0 bg-black/50" aria-hidden="true" />
          <div className="p-2 w-screen max-w-xs">
            <div>
              <button
                className="rounded w-full p-5 flex justify-end hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <nav>
              <ul
                className="flex flex-col text-center"
                onClick={() => setIsOpen(false)}
              >
                <div className="border border-border/50"></div>
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    <li>
                      {link === "Home" || link === "Accueil" ? (
                        <Link href={`/${locale}`} className={linkStyle}>
                          {link}
                        </Link>
                      ) : (
                        <Link
                          href={`/${locale}/${link.toLowerCase()}`}
                          className={linkStyle}
                        >
                          {link}
                        </Link>
                      )}
                    </li>
                    <div className="border border-border/50"></div>
                  </React.Fragment>
                ))}
                {pathname.includes("docs") && (
                  <>
                    <h3 className="text-xl font-semibold my-4">{t("docs")}</h3>
                    <SideNav />
                  </>
                )}
              </ul>
            </nav>
            <div className="flex justify-between p-5">
              <span onClick={() => setIsOpen(false)}>
                <UserConnexion />
              </span>
              <div className="flex justify-end items-center gap-2 ">
                <LocaleSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBurger;
