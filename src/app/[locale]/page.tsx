import Section from "@/components/layout/section";
import FeaturesList from "@/features/features-list";
import Hero from "@/features/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesList />
      <Section>
        <h2>Getting Started</h2>
        <p>
          To get started with My EZ Start Boilerplate, clone the repository and
          follow the setup instructions in the README file. Customize the
          configuration files to suit your project needs, and start building
          your application with ease.
        </p>
        <p>
          This boilerplate is designed to be flexible and extensible, allowing
          you to add features and modify existing ones to fit your specific
          requirements.
        </p>
      </Section>
      <Section>
        <h2>Join the Community</h2>
        <p>
          Join our community of developers to share your experiences, ask
          questions, and collaborate on improving the boilerplate. We welcome
          contributions and feedback to make My EZ Start Boilerplate even
          better.
        </p>
      </Section>
    </>
  );
}
