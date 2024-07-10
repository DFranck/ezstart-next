"use client";
import ItemCards from "@/components/item-cards";
import Section from "@/components/layout/section";
import GetStarted from "@/features/doc/get-started/page";
import { useTranslations } from "next-intl";
import Link from "next/link";

const DocPage = ({ params: { doc } }: { params: { doc: string } }) => {
  const t = useTranslations(`pages.docs.${doc}`);
  const cards = t.raw("items") as {
    [key: string]: { title: string; description: string };
  };

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      {doc === "get-started" ? (
        <GetStarted />
      ) : (
        <Section>
          {Object.entries(cards).map(([key, card]) => (
            <Link key={key} href={`/docs/${doc}/${key}`}>
              <ItemCards {...card} />
            </Link>
          ))}
        </Section>
      )}
    </>
  );
};

export default DocPage;
