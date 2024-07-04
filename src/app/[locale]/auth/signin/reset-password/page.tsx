import Section from "@/components/layout/section";
import ResetPasswordForm from "@/providers/auth/resest-password-form";

const page = () => {
  return (
    <Section className="px-4">
      <ResetPasswordForm />
    </Section>
  );
};

export default page;
