"use client";

import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import AuthSvg from "@/components/svgs/auth-svg";
import NextIntl from "@/components/svgs/intl-svg";
import NextSvg from "@/components/svgs/next-svg";
import PrismaSvg from "@/components/svgs/prisma-svg";
import ReactHookFormSvg from "@/components/svgs/react-hook-form-svg";
import ReactSvg from "@/components/svgs/react-svg";
import TailwindSvg from "@/components/svgs/tailwind-svg";
import ZodSvg from "@/components/svgs/zod-svg";
import { useTranslations } from "next-intl";
import Link from "next/link";

const GetStarted = () => {
  const t = useTranslations("pages.docs.get-started");
  const cardStyle =
    "bg-card text-card-foreground list-disc p-4 gap-2 pl-6 rounded border shadow flex flex-col flex-grow";
  const cardTitleStyle = "text-center text-xl font-semibold mb-2";
  const liStyle = "flex gap-2";
  const environmentVariables = t.raw(
    "sections.environment-variables.steps"
  ) as {
    name: string;
    description: string;
    link?: string;
    code?: string;
  }[];
  return (
    <>
      <Section id="installation" className="py-0">
        <h2 id="installation" className="mt-8 mb-4 ">
          {t("sections.installation.title")}
        </h2>
        <CodeBlock code={t("sections.installation.steps")} language="bash" />
      </Section>
      <Section id="setup-env" className="py-0">
        <h2 id="setup-env" className="mt-8 mb-4 ">
          {t("sections.setup-env.title")}
        </h2>
        <CodeBlock code={t("sections.setup-env.steps")} language="bash" />
      </Section>
      <Section id="environment-variables" className="py-0">
        <h2 className="mt-8 mb-4 ">{t("sections.setup-env.title")}</h2>
        <ul className="space-y-4">
          {environmentVariables.map((env, index) => (
            <li key={index} className="mb-4">
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
      </Section>
      <Section id="start" className="py-0">
        <h2 className="mt-8 mb-4 ">{t("sections.start.title")}</h2>
        <CodeBlock code={t("sections.start.steps")} language="bash" />
      </Section>
      <Section id="primary-dependencies" className="py-0">
        <h2 className="mt-8 mb-4 ">
          {t("sections.primary-dependencies.title")}
        </h2>
        <p className="text-muted-foreground text-sm mb-4">
          {t("sections.primary-dependencies.description")}
        </p>
        <div className="flex gap-4 flex-wrap w-full">
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t("sections.primary-dependencies.framework")}
            </h3>
            <li className={liStyle}>
              <NextSvg className="w-6" />
              <Link href="https://nextjs.org/docs" target="_blank">
                Next.js
              </Link>
            </li>
            <li className={liStyle}>
              <ReactSvg className="w-6" />
              <Link href="https://react.dev/" target="_blank">
                React
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t("sections.primary-dependencies.orm")}
            </h3>
            <li className={liStyle}>
              <PrismaSvg className="w-6" />
              <Link href="https://www.prisma.io/docs/" target="_blank">
                Prisma
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t("sections.primary-dependencies.authentication")}
            </h3>
            <li className={liStyle}>
              <AuthSvg className="w-6" />
              <Link href="https://authjs.dev/" target="_blank">
                Auth.js
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t("sections.primary-dependencies.styling")}
            </h3>
            <li className={liStyle}>
              <TailwindSvg className="w-6" />
              <Link href="https://tailwindcss.com/docs" target="_blank">
                Tailwind CSS
              </Link>
            </li>
            <li className={liStyle}>
              <NextSvg className="w-6" />
              <Link
                href="https://github.com/pacocoursey/next-themes"
                target="_blank"
              >
                Next Themes
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t("sections.primary-dependencies.forms")}
            </h3>
            <li className={liStyle}>
              <ReactHookFormSvg className="w-6" />
              <Link href="https://react-hook-form.com/" target="_blank">
                React Hook Form
              </Link>
            </li>
            <li className={liStyle}>
              <ZodSvg className="w-6" />
              <Link href="https://zod.dev/" target="_blank">
                Zod
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t("sections.primary-dependencies.internationalization")}
            </h3>
            <li className={liStyle}>
              <NextIntl className="w-6" />
              <Link href="https://next-intl-docs.vercel.app/" target="_blank">
                NextIntl
              </Link>
            </li>
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="mt-8 mb-4 ">{t("sections.enjoy.title")}</h2>
        <p>{t("sections.enjoy.description")}</p>
      </Section>
    </>
  );
};

export default GetStarted;
