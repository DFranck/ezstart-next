"use client";
import Section from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

const layoutComponents = [
  {
    name: "Nav",
    path: "nav",
    description: "Documentation pour le composant de navigation.",
  },
  {
    name: "Section",
    path: "section",
    description: "Documentation pour le composant de section.",
  },
];

const uiComponents = [
  {
    name: "Carousel3D",
    path: "carousel-3d",
    description: "Documentation pour le composant de carousel 3D.",
  },
];

const DocComponents = () => {
  const t = useTranslations("pages.docs.components");

  return (
    <>
      <Section className="">
        <h2>{t("layout-components-title")}</h2>
        <p>{t("layout-components-subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {layoutComponents.map((component) => (
            <Link
              href={`/docs/components/${component.path}`}
              key={component.name}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent>
                  <CardTitle>{component.name}</CardTitle>
                  <CardDescription className="text-center">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="">
        <h2>{t("ui-components-title")}</h2>
        <p>{t("ui-components-subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {uiComponents.map((component) => (
            <Link
              href={`/docs/components/${component.path}`}
              key={component.name}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent>
                  <CardTitle>{component.name}</CardTitle>
                  <CardDescription className="text-center">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default DocComponents;
