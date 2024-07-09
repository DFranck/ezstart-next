"use client";
import UpdateAppName from "@/features/doc/dev-tools/update-app-name";
import GetStarted from "@/features/doc/get-started/page";
import { useTranslations } from "next-intl";

const DynamicPageContent = ({
  params: { doc },
}: {
  params: { doc: string };
}) => {
  const t = useTranslations(`pages.docs.${doc}`);

  return (
    <>
      <h1>{t("title")}</h1>
      <p className="mb-10">{t("description")}</p>
      {doc === "dev-tools" && <UpdateAppName />}
      {doc === "get-started" && <GetStarted />}
      {/* Ajoutez d'autres conditions pour d'autres pages dynamiques */}
    </>
  );
};

export default DynamicPageContent;
