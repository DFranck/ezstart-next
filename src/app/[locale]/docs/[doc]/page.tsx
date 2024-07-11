"use client";
import ComingSoon from "@/components/coming-soon";
import ItemCards from "@/components/item-cards";
import Section from "@/components/layout/section";
import DocGetStarted from "@/features/doc/get-started/doc-get-started";
import { cn } from "@/lib/utils";
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
      {doc === "payment" && <ComingSoon />}
      {doc === "get-started" ? (
        <DocGetStarted />
      ) : (
        <Section>
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full"
            )}
          >
            {Object.entries(cards).map(([key, card]) => (
              <Link key={key} href={`/docs/${doc}/${key}`} className={cn("")}>
                <ItemCards {...card} />
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
};

export default DocPage;
