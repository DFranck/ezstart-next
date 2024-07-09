import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";

const UpdateAppName = () => {
  const t = useTranslations("pages.docs.dev-tools.sections.updateAppName");
  return <Section id="update-app-name">{t("title")}</Section>;
};

export default UpdateAppName;
