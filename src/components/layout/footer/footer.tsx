import { useLocale } from "next-intl";
import FooterCopyright from "./footer-copyright";
import FooterLinks from "./footer-links";
import FooterPartner from "./footer-partner";

const Footer = () => {
  const locale = useLocale();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="flex flex-col">
        <FooterPartner />
        <FooterLinks locale={locale} />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
