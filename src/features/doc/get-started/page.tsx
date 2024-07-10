"use client";

import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";

const GetStarted = () => {
  const t = useTranslations("pages.docs.get-started");

  return (
    <>
      <Section id="installation" className="py-0">
        <h2 id="installation">{t("sections.installation.title")}</h2>
        <CodeBlock code={t("sections.installation.steps")} language="bash" />
      </Section>
      <Section id="setup-env" className="py-0">
        <h2 id="setup-env">{t("sections.setup-env.title")}</h2>
        <CodeBlock code={t("sections.setup-env.steps")} language="bash" />
      </Section>
      {/* <Section id="environment-variables" className="py-0">
        <h2 className="mt-8 mb-4 ">{t("sections.setup-env.title")}</h2>
        <ul className="space-y-4">
          {environmentVariables.map((env, index) => (
            <li
              key={index}
              className="mb-4 overflow-auto break-words whitespace-pre-wrap"
            >
              <strong>{env.name}</strong>: {env.description}
              {env.link && (
                <p>
                  <Link
                    href={env.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </Link>
                </p>
              )}
              {env.code && <CodeBlock code={env.code} language="bash" />}
            </li>
          ))}
        </ul>
      </Section> */}
      <Section id="start" className="py-0">
        <h2 className="mt-8 mb-4 ">{t("sections.start.title")}</h2>
        <CodeBlock code={t("sections.start.steps")} language="bash" />
      </Section>
      <h2 className="">{t("sections.enjoy.title")}</h2>
      <p className="mb-10">{t("sections.enjoy.description")}</p>
    </>
  );
};

export default GetStarted;
