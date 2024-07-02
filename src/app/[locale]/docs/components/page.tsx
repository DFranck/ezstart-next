import ComingSoon from "@/components/layout/coming-soon.";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ComponentPage = () => {
  return (
    <Section className="gap-10 ">
      <h1>Components</h1>
      <p className="text-muted-foreground">
        On this page you can find the common components used in EzStart
        boilerplate, they can comes from ShadcnUi & Aceternity, you can find
        them in the components folder or more in their own website
      </p>

      <h2>EzStart Components</h2>
      <p className="text-muted-foreground">
        I create some components for my projects in the same systeme of shadcnui
        but i adding some features like auto translation display
      </p>
      <h2>Commponents</h2>
      <ul className="flex gap-4 justify-center">
        <li className="flex gap-4 justify-center">
          <Button>
            <Link href="/docs/components/nav">Nav.tsx</Link>
          </Button>
        </li>
      </ul>
      <ComingSoon message="Components documentation is under construction. Stay tuned for updates!" />
    </Section>
  );
};

export default ComponentPage;
