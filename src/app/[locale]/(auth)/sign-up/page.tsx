import Section from "@/components/layout/section";
import SignUpForm from "@/features/auth/sign-up-form";

const page = () => {
  return (
    <Section className="px-4 w-screen h-screen absolute top-0 left-0 bg-background">
      <SignUpForm />
    </Section>
  );
};

export default page;
