"use client";

import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";
import Link from "next/link";

const GetStarted = () => {
  const t = useTranslations("App.GetStarted");
  const cardStyle =
    "bg-card text-card-foreground list-disc p-4 pl-6 rounded border shadow flex flex-col flex-grow";
  const cardTitleStyle = "text-center text-xl font-semibold mb-2";

  return (
    <Section className="">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-4">{t("welcome")}</p>
      <p className="mb-4">{t("intro")}</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t("installationTitle")}</h2>
      <pre className="bg-background p-4 rounded w-full text-accent-foreground border shadow overflow-x-auto">
        <code>{t("installationSteps")}</code>
      </pre>
      <h2 className="text-2xl font-bold mt-8 mb-4">
        {t("primaryDependenciesTitle")}
      </h2>
      <div className="flex gap-4 flex-wrap">
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("framework")}</h3>
          <li>
            <Link href="https://nextjs.org/docs" target="_blank">
              Next.js
            </Link>
          </li>
          <li>
            <Link href="https://react.dev/" target="_blank">
              React
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("orm")}</h3>
          <li>
            <Link href="https://www.prisma.io/docs/" target="_blank">
              Prisma
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("authentication")}</h3>
          <li>
            <Link href="https://authjs.dev/" target="_blank">
              Auth.js
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("styling")}</h3>
          <li>
            <Link href="https://tailwindcss.com/docs" target="_blank">
              Tailwind CSS
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/pacocoursey/next-themes"
              target="_blank"
            >
              Next Themes
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("forms")}</h3>
          <li>
            <Link href="https://react-hook-form.com/" target="_blank">
              React Hook Form
            </Link>
          </li>
          <li>
            <Link href="https://zod.dev/" target="_blank">
              Zod
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("internationalization")}</h3>
          <li>
            <Link href="https://next-intl-docs.vercel.app/" target="_blank">
              NextIntl
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">
        {t("secondaryDependenciesTitle")}
      </h2>
      <div className="flex gap-4 flex-wrap">
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("utilityLibraries")}</h3>
          <li>
            <Link
              href="https://github.com/react-hook-form/resolvers"
              target="_blank"
            >
              @hookform/resolvers
            </Link>
          </li>
          <li>
            <Link
              href="https://www.radix-ui.com/docs/primitives/components/label"
              target="_blank"
            >
              @radix-ui/react-label
            </Link>
          </li>
          <li>
            <Link
              href="https://www.radix-ui.com/docs/primitives/components/slot"
              target="_blank"
            >
              @radix-ui/react-slot
            </Link>
          </li>
          <li>
            <Link href="https://github.com/joe-bell/cva" target="_blank">
              class-variance-authority
            </Link>
          </li>
          <li>
            <Link href="https://github.com/lukeed/clsx" target="_blank">
              clsx
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/dcastil/tailwind-merge"
              target="_blank"
            >
              tailwind-merge
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("animations")}</h3>
          <li>
            <Link href="https://www.framer.com/motion/" target="_blank">
              framer-motion
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/tailwindlabs/tailwindcss-animate"
              target="_blank"
            >
              tailwindcss-animate
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("icons")}</h3>
          <li>
            <Link href="https://lucide.dev/" target="_blank">
              lucide-react
            </Link>
          </li>
        </ul>
        <ul className={cardStyle}>
          <h3 className={cardTitleStyle}>{t("security")}</h3>
          <li>
            <Link href="https://github.com/dcodeIO/bcrypt.js" target="_blank">
              bcryptjs
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t("enjoy")}</h2>
    </Section>
  );
};

export default GetStarted;
