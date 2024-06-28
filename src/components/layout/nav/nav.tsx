"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Définition des variants de styles pour Nav
const navVariants = cva("hidden ", {
  variants: {
    pos: {
      default: "justify-center items-center ",
      fixed: "md:fixed",
    },
    dir: {
      row: "flex",
      col: "md:block min-w-60 relative md:p-4 overflow-hidden text-elipsis",
    },
  },
  defaultVariants: {
    pos: "default",
    dir: "row",
  },
});

// Définition des variants de styles pour Link

type NavProps = {
  t: string; // Translation key
  render: string; // Display array or object key
  root?: number[]; // Root indices (only applicable if d is an array)
  className?: string;
  path?: string; // Base path for non-root links
  active?: boolean;
  pos?: VariantProps<typeof navVariants>["pos"]; // Type de navigation
  dir?: VariantProps<typeof navVariants>["dir"]; // Orientation
};

const Nav: React.FC<NavProps> = ({
  t,
  render,
  root = [],
  className,
  path = "",
  pos,
  active,
  dir,
}) => {
  const locale = useLocale();
  const pathname = usePathname();
  const intl = useTranslations(t);
  const rawLinks = intl.raw(render);

  const links = Array.isArray(rawLinks) ? rawLinks : Object.values(rawLinks);
  const linkKeys = Array.isArray(rawLinks) ? links : Object.keys(rawLinks);

  if (!links) return null;

  return (
    <nav
      className={cn(navVariants({ dir }), className)}
      aria-label="Main navigation"
    >
      <ul
        className={cn(
          navVariants({ pos }),
          "hidden md:flex",
          dir === "col" ? "flex-col space-y-4" : "flex-row"
        )}
      >
        {links.map((link, index) => {
          const linkPath = Array.isArray(rawLinks)
            ? root.includes(index)
              ? `/${locale}`
              : `/${locale}${path}/${link.toLowerCase()}`
            : `/${locale}/${path}/${linkKeys[index].toLowerCase()}`;
          const isActive = pathname.startsWith(linkPath);

          return (
            <li key={`${link}-${index}`}>
              <Link
                href={linkPath}
                aria-label={link}
                className={cn(
                  "p-2 rounded",
                  isActive && active
                    ? "bg-primary text-primary-foreground "
                    : "",
                  active && !isActive
                    ? "hover:bg-primary/50 hover:text-primary-foreground duration-100"
                    : ""
                )}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
