"use client";
import UpdateAppName from "@/features/doc/dev-tools/update-app-name";
import { useTranslations } from "next-intl";

const DynamicPageContent = ({
  params: { doc },
}: {
  params: { doc: string };
}) => {
  const t = useTranslations(`pages.docs.${doc}`);

  return (
    <>
      <h1>{t("title")} Content</h1>
      <p>{t("description")}</p>
      <UpdateAppName />
      {/* Ajoutez d'autres conditions pour d'autres pages dynamiques */}
    </>
  );
};

export default DynamicPageContent;
