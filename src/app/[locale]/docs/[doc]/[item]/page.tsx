"use client";
import CodeBlock from "@/components/code-block";
import { useTranslations } from "next-intl";

const ItemPage = ({ params }: { params: { doc: string; item: string } }) => {
  const t = useTranslations(`pages.docs.${params.doc}.items.${params.item}`);

  const features = t.raw("features.content") as string[];
  const files = t.raw("files.code-links") as Record<string, string>;
  const exampleUsageSteps = t.raw("example-usage.steps") as {
    "step-title": string;
    "step-description": string;
    "step-code"?: string;
  }[];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-4">{t("description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("files.title")}</h2>
        <p className="mb-4">{t("files.description")}</p>
        <ul className="list-disc pl-6">
          {Object.entries(files).map(([fileName, fileLink]) => (
            <li key={fileName} className="mb-2">
              <a
                href={fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {fileName}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("features.title")}</h2>
        <ul className="list-disc pl-6">
          {features.map((feature, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: feature }}
              className="mb-2"
            />
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {t("example-usage.title")}
        </h2>
        <p className="mb-4">{t("example-usage.description")}</p>
        <ol className="list-decimal pl-6">
          {exampleUsageSteps.map((step, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold mb-2">{step["step-title"]}</h3>
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: step["step-description"] }}
              />
              {step["step-code"] && (
                <CodeBlock
                  code={step["step-code"]}
                  language={t("example-usage.language")}
                />
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default ItemPage;
