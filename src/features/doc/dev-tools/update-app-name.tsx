import CodeBlock from "@/components/code-block";
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
    <div className="documentation-section">
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <h3>{t("features.title")}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
        ))}
      </ul>
      <h3>{t("howItWorks.title")}</h3>
      <ul>
        {howItWorks.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <h3>{t("configuration.title")}</h3>
      <p>{t("configuration.content")}</p>
      <h3>{t("exampleUsage.title")}</h3>
      {exampleUsage.map((example, index) => (
        <div key={index}>
          <h4>{example.title}</h4>
          <p>{example.description}</p>
          <CodeBlock code={example.code} language={example.language} />
        </div>
      ))}
    </div>
  );
};

export default UpdateAppName;
