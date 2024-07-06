import Section from "@/components/layout/section";
import VerifyCodeForm from "@/features/auth/verify-code-form";

const page = () => {
  return (
    <Section className="px-4 w-screen h-screen absolute top-0 left-0 bg-background">
      <VerifyCodeForm />
    </Section>
  );
};

export default page;
