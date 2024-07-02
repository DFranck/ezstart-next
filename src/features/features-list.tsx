"use client";
import Section from "@/components/layout/section";
import AuthSvg from "@/components/svgs/auth-svg";
import CodeSvg from "@/components/svgs/code-svg";
import ComponentSvg from "@/components/svgs/component-svg";
import DbSvg from "@/components/svgs/db-svg";
import GlobalSvg from "@/components/svgs/global-svg";
import NextIntl from "@/components/svgs/intl-svg";
import NextSvg from "@/components/svgs/next-svg";
import PrismaSvg from "@/components/svgs/prisma-svg";
import SecureSvg from "@/components/svgs/secure-svg";
import StackSvg from "@/components/svgs/stack-svg";
import TypescriptSvg from "@/components/svgs/typescript-svg";
import { GlareCard } from "@/components/ui/glare-card";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const svgComponents: { [key: string]: React.FC<{ className?: string }> } = {
  AuthSvg,
  NextIntl,
  NextSvg,
  PrismaSvg,
  StackSvg,
  SecureSvg,
  TypescriptSvg,
  GlobalSvg,
  DbSvg,
  ComponentSvg,
  CodeSvg,
};

const FeaturesList = () => {
  const t = useTranslations("App.Home.FeaturesList");
  const locale = useLocale();
  const features = t.raw("features") as {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];

  return (
    <Section className="text-justify md:text-center px-4 ">
      <h3 className="text-primary text-xl font-bold my-4">{t("title")}</h3>
      <h2 className="md:text-3xl">
        {t("subtitle")} <span className="">EzStart</span>
      </h2>
      <p className="mb-10">{t("description")}</p>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 mx-auto max-w-screen-lg text-justify">
        {features.map((feature, index) => {
          const SvgComponent = svgComponents[feature.image];
          return (
            <React.Fragment key={index}>
              <li key={index} className="relative">
                <Link
                  href={`/${locale}/docs/${feature.link}`}
                  rel="noopener noreferrer"
                >
                  <GlareCard className="p-4">
                    {SvgComponent && <SvgComponent className={"h-12 w-12"} />}
                    <h3 className="mt-2 text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm md:text-base text-justify">
                      {feature.description}
                    </p>
                  </GlareCard>
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </Section>
  );
};

export default FeaturesList;
