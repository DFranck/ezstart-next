import Section from "@/components/layout/section";
import VerifyCodeForm from "@/providers/auth/verify-code-form";

const page = () => {
  return (
    <Section>
      <VerifyCodeForm />
    </Section>
  );
};

export default page;
