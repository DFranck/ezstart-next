import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const GetStarted = () => {
  const t = useTranslations("App.Home.GetStarted");
  const content = t.raw("content") as string[];

  return (
    <Section className="flex flex-col items-center text-justify md:text-center py-12 px-4">
      <Button className="mb-6 text-lg px-8 py-6 font-bold">
        {t("buttonText")}
      </Button>
      <div className="max-w-4xl">
        {content.map((paragraph: string, index: number) => (
          <p className="text-lg md:text-xl font-light mb-6" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default GetStarted;
