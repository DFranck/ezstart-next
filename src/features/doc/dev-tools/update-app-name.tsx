import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";

const UpdateAppName = () => {
  const t = useTranslations("pages.docs.dev-tools.sections.update-app-name");
  const features: string[] = Object.values(t.raw("features.content"));
  const howItWorks: string[] = Object.values(t.raw("howItWorks.content"));
  const exampleUsage = t.raw("exampleUsage.content") as {
    title: string;
    description: string;
    code: string;
    language: string;
  }[];
  return (
    <>
      <Section id="update-app-name" className="pt-0">
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </Section>
      <Section className="pt-0">
        <h3>{t("features.title")}</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
      </Section>
      <Section className="pt-0">
        <h3>{t("howItWorks.title")}</h3>
        <ul>
          {howItWorks.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Section>
      <Section className="pt-0">
        <h3>{t("configuration.title")}</h3>
        <p>{t("configuration.content")}</p>
      </Section>
      <h3>{t("exampleUsage.title")}</h3>
      {exampleUsage.map((example, index) => (
        <Section key={index}>
          <h4>{example.title}</h4>
          <p>{example.description}</p>
          <CodeBlock code={example.code} language={example.language} />
        </Section>
      ))}
    </>
  );
};

export default UpdateAppName;
