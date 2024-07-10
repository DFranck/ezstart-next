import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";

const UpdateAppName = () => {
  const t = useTranslations("pages.docs.dev-tools.sections.update-app-name");
  const features: string[] = Object.values(t.raw("features.content"));
  const howItWorks: string[] = Object.values(t.raw("howItWorks.content"));
  const exampleUsage: string[] = t.raw("exampleUsage.steps");
  return (
    <>
      <Section id="update-app-name" className="pt-0">
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </Section>

      <Section className="pt-0">
        <h3>{t("features.title")}</h3>
        <ul className="self-start">
          {features.map((feature, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
      </Section>
      <Section className="pt-0">
        <h3>{t("exampleUsage.title")}</h3>
        {exampleUsage.map((step, index) => (
          <p
            className="self-start"
            key={index}
            dangerouslySetInnerHTML={{ __html: step }}
          />
        ))}
      </Section>
    </>
  );
};

export default UpdateAppName;
