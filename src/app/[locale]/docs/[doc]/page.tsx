"use client";
import Section from "@/components/layout/section";
import Carousel3DDoc from "@/features/doc/components/carousel-3d-doc";
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
      <Section>
        <h1>{t("title")}</h1>
        <p className="mb-10">{t("description")}</p>
      </Section>
      {doc === "dev-tools" && <UpdateAppName />}
      {doc === "get-started" && <GetStarted />}
      {doc === "components" && <Carousel3DDoc />}
      {/* Ajoutez d'autres conditions pour d'autres pages dynamiques */}
    </>
  );
};

export default DynamicPageContent;
