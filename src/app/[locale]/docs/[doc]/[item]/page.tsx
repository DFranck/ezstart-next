"use client";
import Carousel3D from "@/components/carousel-3d";
import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";

const componentMap: { [key: string]: React.ComponentType } = {
  Carousel3D,
  // Ajoutez d'autres composants ici
};

const ItemPage = ({ params }: { params: { doc: string; item: string } }) => {
  const t = useTranslations(`pages.docs.${params.doc}.items.${params.item}`);

  const features = t.raw("features.content") as string[];
  const files = t.raw("files.code-links") as Record<string, string>;
  const exampleUsageSteps = t.raw("example-usage.steps") as {
    "step-title": string;
    "step-description": string;
    "step-code"?: string;
  }[];
  const displayComponentName = t.raw("display.component") as string;
  const renderComponent = (componentName: string | undefined) => {
    if (!componentName || !componentMap[componentName]) {
      return null;
    }

    const Component = componentMap[componentName];
    return <Component />;
  };
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Section className="py-0">
        <h2>{t("files.title")}</h2>
        {/* <p>{t("files.description")}</p> */}
        <ul className="list-disc pl-6 self-start">
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
      </Section>

      <Section className="py-0">
        <h2>{t("features.title")}</h2>
        <ul className="list-disc pl-6 self-start">
          {features.map((feature, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: feature }}
              className="mb-2"
            />
          ))}
        </ul>
      </Section>

      <Section className="py-0">
        <h2>{t("example-usage.title")}</h2>
        <p>{t("example-usage.description")}</p>
        <ol className="list-none lg:list-decimal lg:pl-6">
          {exampleUsageSteps.map((step, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold mb-2">{step["step-title"]}</h3>
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: step["step-description"] }}
              />
              {step["step-code"] && <CodeBlock code={step["step-code"]} />}
            </li>
          ))}
        </ol>
      </Section>
      {displayComponentName && (
        <Section className="py-0">
          <h2>{t("display.title")}</h2>
          {renderComponent(displayComponentName)}
        </Section>
      )}
    </>
  );
};

export default ItemPage;
