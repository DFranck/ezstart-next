import { useTranslations } from "next-intl";
import Link from "next/link";

const Logo = () => {
  const t = useTranslations("Header");
  const title = t("title");
  if (!title) return null;

  return (
    <Link className="rounded-full hover:opacity-80 flex items-center" href="/">
      <span className="sr-only">Logo</span>
      <h1>{title}</h1>
    </Link>
  );
};

export default Logo;
