import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import FooterCopyright from "./footer-copyright";
import FooterLinks from "./footer-links";
import FooterPartner from "./footer-partner";

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("footer");
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="flex flex-col">
        <FooterPartner />
        <FooterLinks locale={locale} />
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <FooterCopyright />
          <p className="p-4 mx-4 text-center">
            {" "}
            {t("owner")}
            <Link href={`https://dfranck.netlify.app/`} target="_blank">
              <b>Franck Duforunet</b>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
