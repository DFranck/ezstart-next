import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <Section className="flex flex-col items-center text-center py-12 px-4">
      <Button className="mb-6 text-lg px-8 py-8 font-bold rounded-lg shadow-lg">
        Get Started
      </Button>
      <div className="max-w-4xl">
        <p className="text-lg md:text-xl font-light mb-6">
          To get started with My EZ Start Boilerplate, clone the repository and
          follow the setup instructions in the README file. Customize the
          configuration files to suit your project needs, and start building
          your application with ease.
        </p>
        <p className="text-lg md:text-xl font-light">
          This boilerplate is designed to be flexible and extensible, allowing
          you to add features and modify existing ones to fit your specific
          requirements.
        </p>
      </div>
    </Section>
  );
};

export default GetStarted;
