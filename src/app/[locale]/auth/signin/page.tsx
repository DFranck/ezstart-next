import Section from "@/components/layout/section";
import SignInFrom from "@/providers/auth/sign-in-form";

const page = () => {
  return (
    <Section className="px-4">
      <SignInFrom />
    </Section>
  );
};

export default page;
