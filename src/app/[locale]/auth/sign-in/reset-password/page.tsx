import Section from "@/components/layout/section";
import ResetPasswordForm from "@/providers/auth/resest-password-form";

const page = () => {
  return (
    <Section className="px-4 w-screen h-screen absolute top-0 left-0 bg-background">
      <ResetPasswordForm />
    </Section>
  );
};

export default page;
