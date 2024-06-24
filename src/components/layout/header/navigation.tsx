import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Navigation = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const links = t.raw("links") as string[];
  if (!links) return null;
  return (
    <nav className="justify-center items-center gap-5 hidden md:flex">
      <ul className="flex justify-center items-center gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={`/${locale}/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
