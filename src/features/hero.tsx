import Section from "@/components/layout/section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("App.Home.Hero");
  const locale = useLocale();
  return (
    <AuroraBackground className="text-foreground w-screen h-fit pt-28 pb-10 md:h-screen">
      <Section className="max-w-4xl text-justify md:text-center px-6 gap-10">
        <h1 className="text-3xl md:text-7xl font-bold text-center">
          {t("title")}
        </h1>
        <p className="font-extralight text-base md:text-2xl">
          {t("description")}
        </p>
        <div>
          <Button asChild className="mb-6 text-lg px-8 py-6 font-bold">
            <Link href={`/${locale}/docs/get-started`}>{t("cta")}</Link>
          </Button>
        </div>
      </Section>
    </AuroraBackground>
  );
};

export default Hero;
