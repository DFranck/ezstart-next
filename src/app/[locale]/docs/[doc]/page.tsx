"use client";
import ComingSoon from "@/components/coming-soon";
import DocAuthentication from "@/features/doc/doc-authentication";
import DocDbManagement from "@/features/doc/doc-db-management";
import DocGetStarted from "@/features/doc/doc-get-started";
import DocInternationalization from "@/features/doc/doc-internationalization";
import { useTranslations } from "next-intl";

const DocPage = ({ params: { doc } }: { params: { doc: string } }) => {
  const t = useTranslations(`pages.docs.${doc}`);
  let DocComponent;
  switch (doc) {
    case "get-started":
      DocComponent = DocGetStarted;
      break;
    case "db-management":
      DocComponent = DocDbManagement;
      break;
    case "internationalization":
      DocComponent = DocInternationalization;
      break;
    case "authentication":
      DocComponent = DocAuthentication;
    default:
      break;
  }
  return (
    <>
      <h1>{t("title")}</h1>
      <p className="text-center">{t("description")}</p>
      {DocComponent ? <DocComponent /> : <ComingSoon />}
    </>
  );
};

export default DocPage;
