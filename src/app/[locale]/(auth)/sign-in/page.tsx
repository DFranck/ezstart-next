"use server";
import Section from "@/components/layout/section";
import SignInFrom from "@/features/auth/sign-in-form";

const page = () => {
  return (
    <Section className="px-4 w-screen h-screen absolute top-0 left-0 bg-background z-10">
      <SignInFrom />
    </Section>
  );
};

export default page;
