import Section from "@/components/layout/section";
import ForgotForm from "../../../../../providers/auth/forgot-form";

const page = () => {
  return (
    <Section className="px-4 w-screen h-screen absolute top-0 left-0 bg-background">
      <ForgotForm />
    </Section>
  );
};

export default page;
