"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SideNav = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const navItems = [
    { title: "Get Started", href: `/${locale}/docs/get-started` },
    { title: "Features", href: `/${locale}/docs/features` },
    { title: "Authentication", href: "/docs/authentication" },
    { title: "Internationalization", href: "/docs/internationalization" },
    { title: "Theming", href: `/${locale}/docs/theming` },
    { title: "Form Management", href: "/docs/form-management" },
    { title: "Animations", href: "/docs/animations" },
    { title: "Database Management", href: "/docs/database-management" },
    { title: "Deployment", href: "/docs/deployment" },
    { title: "FAQ", href: "/docs/faq" },
    { title: "Contributing", href: "/docs/contributing" },
  ];

  return (
    <nav className=" p-4 h-full fixed">
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
