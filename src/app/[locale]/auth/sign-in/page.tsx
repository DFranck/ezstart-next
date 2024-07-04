import Section from "@/components/layout/section";
import SignInFrom from "@/providers/auth/sign-in-form";

const page = () => {
  return (
    <Section className="px-4 w-screen h-screen absolute top-0 left-0 bg-background">
      <SignInFrom />
    </Section>
  );
};

export default page;
