import Section from "@/components/layout/section";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground className="text-foreground w-screen h-fit pt-28 pb-10 md:h-screen">
      <Section className="max-w-4xl text-justify md:text-center px-6">
        <h1 className="text-3xl md:text-7xl font-bold text-center mb-5">
          Welcome to My EZ Start Boilerplate
        </h1>
        <p className="font-extralight text-base md:text-2xl">
          My EZ Start Boilerplate is a comprehensive and flexible starting point
          for your web development projects. Built with modern technologies and
          best practices, it helps you kickstart your development process with a
          robust foundation.
        </p>
      </Section>
    </AuroraBackground>
  );
};

export default Hero;
