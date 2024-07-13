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

const components = [
  {
    name: "Nav",
    path: "nav",
    description: "Documentation pour le composant de navigation.",
  },
];

const DocComponents = () => {
  const t = useTranslations("pages.docs.components");

  return (
    <Section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {components.map((component) => (
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
  );
};

export default DocComponents;
