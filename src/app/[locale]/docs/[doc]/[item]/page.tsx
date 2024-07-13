"use client";
import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import Nav from "@/components/nav";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ComponentType } from "react";
interface ComponentPropsMap {
  [key: string]: ComponentType<any>;
}
const componentMap: ComponentPropsMap = {
  Nav,
  Section,
  // Ajoutez d'autres composants ici si nécessaire
};

const normalizeComponentName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const ItemPage = ({
  params: { doc, item },
}: {
  params: { doc: string; item: string };
}) => {
  const t = useTranslations("pages.docs.components");
  const normalizedItem = normalizeComponentName(item);
  const Component = componentMap[normalizedItem];
  let propTypes;
  console.log(item);

  try {
    propTypes = t.raw(`${item}.props`);
    if (!Array.isArray(propTypes)) {
      throw new Error("propTypes is not an array");
    }
  } catch (error) {
    console.error("Error fetching propTypes:", error);
  }

  if (!Component || !Array.isArray(propTypes)) {
    return (
      <Section className="absolute bg-background w-full h-full top-0 left-0 z-10 gap-10">
        <p>{t("not-found", { item: normalizedItem })}</p>
        <Link href="/" className="hover:underline">
          {t("go-back")}
        </Link>
      </Section>
    );
  }
  const cellStyle = "py-2 px-4 border-b";
  return (
    <>
      <Section>
        <h1>{t("item-title", { item: normalizedItem })}</h1>
        <p>{t("item-description", { item: normalizedItem })}</p>
      </Section>

      <Section>
        <h2>{t("usage-title")}</h2>
        <p>{t("usage-description", { item: normalizedItem })}</p>
        <h3>{t("nav.static")}</h3>
        <CodeBlock
          src={`// static mode`}
          code={`import ${normalizedItem} from '@/components/${normalizedItem}';\n\nconst App = () => (\n  <${normalizedItem} links={['Home', 'About', 'Contact']} />\n);`}
        />
        <h3>{t("nav.dynamic")}</h3>
        <CodeBlock
          src={`// en.json`}
          code={`{
            "nav": {
              "links": ["Home", "About", "Contact"]
            }
          }`}
        />
        <CodeBlock
          src={`// dynamic mode`}
          code={`import ${normalizedItem} from '@/components/${normalizedItem}';\n\nconst App = () => (\n  <${normalizedItem} t="nav" render="links" />\n);`}
        />
      </Section>
      <Section>
        <h2 className="mb-10">{t("props-title")}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-card border shadow text-card-foreground rounded">
            <thead>
              <tr className="text-left ">
                <th className={cellStyle}>Prop</th>
                <th className={cellStyle}>Type</th>
                <th className={cn("hidden sm:table-cell", cellStyle)}>
                  Description
                </th>
                <th className={cn("hidden md:table-cell", cellStyle)}>
                  {t("default")}
                </th>
              </tr>
            </thead>
            <tbody>
              {propTypes.map((prop: any) => (
                <tr key={prop.name}>
                  <td className={cellStyle}>{prop.name}</td>
                  <td className={cellStyle}>{prop.type}</td>
                  <td className={cn("hidden sm:table-cell", cellStyle)}>
                    {prop.description}
                  </td>
                  <td className={cn("hidden md:table-cell", cellStyle)}>
                    {prop.default}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <h2>{t("variants-title")}</h2>
        <p>{t("variants-description", { item: normalizedItem })}</p>
        <ul>
          {propTypes
            .filter((prop: any) => prop.options)
            .map((prop: any) => (
              <li key={prop.name}>
                <strong>{prop.name}</strong> : {prop.options.join(", ")}
              </li>
            ))}
        </ul>
      </Section>
      <Section>
        <p>{t("note")}</p>
      </Section>
      {/* <Section>
        <h2>{t("exemple-title")}</h2>
        <p>{t("exemple-description")}</p>
        <div className="border p-4">
          <Component links={["Home", "About", "Contact"]} />
        </div>
      </Section> */}
    </>
  );
};

export default ItemPage;
