import Section from "@/components/layout/section";
import SignUpForm from "@/providers/auth/sign-up-form";

const page = () => {
  return (
    <Section className="px-4">
      <SignUpForm />
    </Section>
  );
};

export default page;
