import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navVariants = cva("", {
  variants: {
    dir: {
      row: "",
      col: "md:block w-fit relative md:p-4 min-w-max",
    },
  },
  defaultVariants: {
    dir: "row",
  },
});

const ulVariants = cva("", {
  variants: {
    dir: {
      row: "flex flex-row",
      col: "flex flex-col gap-2",
    },
    pos: {
      default: "justify-center items-center",
      fixed: "md:fixed",
    },
  },
  defaultVariants: {
    dir: "row",
    pos: "default",
  },
});

const linkVariants = cva(
  "text-lg md:p-2 rounded duration-100 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 w-full block text-center",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        secondary: "",
      },
      isActive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        isActive: true,
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "primary",
        isActive: false,
        className: "hover:bg-primary/50 hover:text-primary-foreground",
      },
      {
        variant: "secondary",
        isActive: true,
        className: "bg-accent text-accent-foreground",
      },
      {
        variant: "secondary",
        isActive: false,
        className: "hover:bg-accent rounded w-full text-center cursor-pointer",
      },
    ],
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  }
);

type NavProps = {
  t?: string;
  render?: string;
  root?: number[];
  links?: string[] | { [key: string]: string };
  path?: string;
  active?: boolean;
  navClass?: string;
  ulClass?: string;
  liClass?: string;
  variant?: VariantProps<typeof linkVariants>["variant"];
  pos?: VariantProps<typeof ulVariants>["pos"];
  dir?: VariantProps<typeof navVariants>["dir"];
  setIsOpen?: (value: boolean) => void;
};

const Nav = ({
  t,
  render,
  root = [],
  links,
  navClass = "",
  ulClass = "",
  liClass = "",
  path = "",
  pos,
  active = false,
  variant = "default",
  dir,
  setIsOpen,
}: NavProps) => {
  const locale = useLocale();
  const pathname = usePathname();
  const intl = useTranslations(t || "");
  const rawLinks = t && render ? intl.raw(render) : links;

  if (!rawLinks) return null;

  const linkList = Array.isArray(rawLinks) ? rawLinks : Object.values(rawLinks);
  const linkKeys = Array.isArray(rawLinks) ? linkList : Object.keys(rawLinks);
  return (
    <>
      <nav
        className={cn(navVariants({ dir }), "w-full md:w-fit", navClass)}
        aria-label="Main navigation"
      >
        <ul className={cn(ulVariants({ dir, pos }), ulClass)}>
          {linkList.map((link, index) => {
            const linkPath = root.includes(index)
              ? `/${locale}`
              : `/${locale}${path ? `/${path}` : ""}/${link.toLowerCase()}`;
            const isActive = pathname.startsWith(linkPath);

            return (
              <li
                key={`${link}-${index}`}
                className={cn("w-full")}
                onClick={() => setIsOpen?.(false)}
              >
                <Link
                  href={linkPath}
                  aria-label={link}
                  className={cn(
                    linkVariants({ variant, isActive: active && isActive }),
                    liClass
                  )}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        {dir === "col" && (
          <ul className={cn(pos === "fixed" ? "invisible" : "hidden")}>
            {linkList.map((link, index) => (
              <li
                key={`${link}-${index}`}
                className="text-lg p-2"
                onClick={() => setIsOpen?.(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
