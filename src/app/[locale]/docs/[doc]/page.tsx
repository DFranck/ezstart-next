"use client";
import DocAuthentication from "@/features/doc/doc-authentication";
import DocDbManagement from "@/features/doc/doc-db-management";
import DocGetStarted from "@/features/doc/doc-get-started";
import DocInternationalization from "@/features/doc/doc-internationalization";
import DocPayment from "@/features/doc/doc-payment";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DocPage = ({ params: { doc } }: { params: { doc: string } }) => {
  const t = useTranslations(`pages.docs.${doc}`);
  const router = useRouter();
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
      break;
    case "payment":
      DocComponent = DocPayment;
      break;
    default:
      DocComponent = null;
  }

  useEffect(() => {
    if (!DocComponent) {
      router.replace("/404");
    }
  }, [DocComponent, router]);

  return (
    <>
      {DocComponent && (
        <>
          <h1>{t("title")}</h1>
          <p className="text-justify">{t("description")}</p>
          <DocComponent />
        </>
      )}
    </>
  );
};

export default DocPage;
