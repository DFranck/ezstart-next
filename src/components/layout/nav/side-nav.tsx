"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const locale = useLocale();
  const t = useTranslations("SideNav");
  const pathname = usePathname();
  const navItems = [
    { title: t("getStarted"), href: `/${locale}/docs/get-started` },
    { title: t("authentication"), href: "/docs/authentication" },
    { title: t("internationalization"), href: "/docs/internationalization" },
    { title: t("theming"), href: `/${locale}/docs/theming` },
  ];

  return (
    <nav className=" md:p-4 h-full md:fixed">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block p-2 rounded ${
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary/50 hover:text-primary-foreground duration-100"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
