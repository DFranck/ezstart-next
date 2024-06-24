import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
const NavBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("");
  const locale = useLocale();
  const link =
    "p-6 hover:bg-accent rounded w-full text-center cursor-pointer block";
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
        <div className="fixed top-0 right-0 z-20 border shadow bg-background animate-slideInFromRight duration-200">
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
              <ul className="flex flex-col text-center">
                <div className="border border-border/50"></div>
                <li className={""}>
                  <Link
                    className={link}
                    onClick={() => setIsOpen(false)}
                    href={`/${locale}`}
                  >
                    {/* {t("Nav.home")} */}Link
                  </Link>
                </li>
                <div className="border border-border/50"></div>
                <li className={""}>
                  <Link
                    className={link}
                    onClick={() => setIsOpen(false)}
                    href={`/${locale}/products`}
                  >
                    {/* {t("Nav.all")} */}Link
                  </Link>
                </li>
                <div className="border border-border/50"></div>
                <li className={""}>
                  <Link
                    className={link}
                    onClick={() => setIsOpen(false)}
                    href={`/${locale}/contact`}
                  >
                    {/* {t("Nav.contact")} */}Link
                  </Link>
                </li>
                <div className="border border-border/50"></div>
              </ul>
            </nav>

            <div className="flex justify-end items-center gap-2 p-5">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBurger;
