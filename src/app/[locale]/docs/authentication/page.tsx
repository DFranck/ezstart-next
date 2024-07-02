import ComingSoon from "@/components/layout/coming-soon.";
import Section from "@/components/layout/section";

const Authentification = () => {
  return (
    <Section>
      <h1>Authentification Feature</h1>
      <p>
        This feature in powered by next-auth.js v5 who can easily provide
        securly token and session
      </p>
      <ComingSoon message="Authentication documentation is under construction. Stay tuned for updates!" />
    </Section>
  );
};

export default Authentification;
