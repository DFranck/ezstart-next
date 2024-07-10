import { useTranslations } from "next-intl";

const FooterPartner = () => {
  const t = useTranslations("layout.footer");
  const partners = t.raw("partners") as string[];
  //partners in the json must be an array
  if (!partners || partners.length === 0) return null;

  return (
    <div className="border-b-2 border-border/50 p-4 mx-4">
      <h4 className="font-semibold text-xl mb-2 text-center">
        {t("partnersTitle")}
      </h4>
      <ul className="flex gap-4 justify-center">
        {partners.map((partner, index) => (
          <li key={index} className="flex items-center justify-center">
            {partner}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPartner;
