"use client";
import ComingSoon from "@/components/coming-soon";
import DocDbManagement from "@/features/doc/doc-db-management";
import DocGetStarted from "@/features/doc/doc-get-started";
import DocInternationalization from "@/features/doc/doc-internationalization";
import { useTranslations } from "next-intl";

const DocPage = ({ params: { doc } }: { params: { doc: string } }) => {
  const t = useTranslations(`pages.docs.${doc}`);
  const cards = t.raw("items") as {
    [key: string]: { title: string; description: string };
  };
  return (
    <>
      <h1>{t("title")}</h1>
      <p className="text-center">{t("description")}</p>
      {doc === "payment" && <ComingSoon />}
      {doc === "internationalization" && <DocInternationalization />}
      {doc === "get-started" && <DocGetStarted />}
      {doc === "db-management" && <DocDbManagement />}
    </>
  );
};

export default DocPage;
