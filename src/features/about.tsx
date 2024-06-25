import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("App.About");
  const content = t.raw("content") as { paragraph: string }[];

  return (
    <Section className="flex flex-col items-center text-center pt-40 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">{t("title")}</h1>
      <div className="max-w-3xl">
        {content.map((item, index) => (
          <p className="text-lg md:text-xl font-light mb-6" key={index}>
            {item.paragraph}
          </p>
        ))}
        <div className="flex flex-col items-center gap-4 mt-8">
          <Link
            href="https://dfranck.netlify.app/"
            passHref
            target="_blank"
            rel="noreferrer noopener"
          >
            View My Portfolio
          </Link>
          <Link
            href="https://www.linkedin.com/in/franck-dufournet-239446151/"
            passHref
            target="_blank"
            rel="noreferrer noopener"
          >
            Connect with Me on LinkedIn
          </Link>
          <Link
            href="https://github.com/DFranck"
            passHref
            target="_blank"
            rel="noreferrer noopener"
          >
            Check Out My GitHub
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;
