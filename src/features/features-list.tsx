"use client";
import Section from "@/components/layout/section";
import AuthSvg from "@/components/svgs/auth-svg";
import NextIntl from "@/components/svgs/intl-svg";
import NextSvg from "@/components/svgs/next-svg";
import PrismaSvg from "@/components/svgs/prisma-svg";
import TypescriptSvg from "@/components/svgs/typescript-svg";
import { GlareCard } from "@/components/ui/glare-card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const svgComponents: { [key: string]: React.FC<{ className?: string }> } = {
  AuthSvg,
  NextIntl,
  NextSvg,
  PrismaSvg,
  TypescriptSvg,
};

const FeaturesList = ({ variant = "default" }: { variant?: string }) => {
  const variantClasses: Record<string, string> = {
    default: "w-[40px] h-[40px] mx-auto mb-4",
    bg: "w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover opacity-20",
  };
  const t = useTranslations("App.Home.FeaturesList");
  const features = t.raw("features") as {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];

  return (
    <Section className="text-justify md:text-center">
      <h2 className="text-2xl md:text-5xl font-bold  my-10">{t("title")}</h2>
      <p className="font-extralight text-base md:text-xl mb-20">
        {t("description")}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-justify">
        {features.map((feature, index) => {
          const SvgComponent = svgComponents[feature.image];
          return (
            <React.Fragment key={index}>
              <li key={index} className="relative">
                <Link
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlareCard className="p-4 md:p-6 lg:p-8">
                    {typeof feature.image === "string" &&
                    feature.image.startsWith("http") ? (
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={64}
                        height={64}
                        className={variantClasses[variant]}
                      />
                    ) : (
                      SvgComponent && (
                        <SvgComponent className={variantClasses[variant]} />
                      )
                    )}
                    <h3 className="text-xl md:text-2xl text-center mb-2 font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base">
                      {feature.description}
                    </p>
                    <span className="text-sm text-blue-500 mt-4 inline-block">
                      {t("docs")}
                    </span>
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
