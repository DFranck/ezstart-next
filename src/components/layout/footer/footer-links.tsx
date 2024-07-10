import { useTranslations } from "next-intl";
import Link from "next/link";

const FooterLinks = ({ locale }: { locale: string }) => {
  const t = useTranslations("layout.footer");
  const links = t.raw("links") as string[];
  //links in the json must be an array
  if (!links || links.length === 0) return null;
  return (
    <div className="border-b-2 border-border/50 p-4 mx-4">
      <ul className="flex gap-4 justify-center">
        {links.map((partner, index) => (
          <li key={index} className="flex items-center justify-center">
            <Link href={`/${locale}/${partner}`}>{partner}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
