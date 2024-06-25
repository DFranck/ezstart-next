import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("App.About");
  const content = t.raw("content") as { paragraph: string }[];
  const links = t.raw("links") as {
    name: string;
    href: string;
    target: string;
    rel: string;
  }[];
  return (
    <Section className="pt-40 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">{t("title")}</h1>
      <div className="max-w-3xl flex flex-col gap-10 text-justify md:text-center">
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <p className="text-lg md:text-xl font-light mb-6">
                {item.paragraph}
              </p>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col md:flex-row gap-4 justify-center ">
          {links.map((item, index) => (
            <li key={index}>
              <Button asChild className="w-full">
                <Link href={item.href} target={item.target} rel={item.rel}>
                  {item.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
