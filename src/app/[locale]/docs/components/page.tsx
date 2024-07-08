import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ComponentPage = () => {
  return (
    <Section className="px-4 md:px-10 lg:px-20 max-w-5xl mx-auto">
      <h1>Components</h1>
      <p className="">
        On this page you can find the common components used in EzStart
        boilerplate, they can comes from{" "}
        <Link href={"https://ui.shadcn.com/docs"}>ShadcnUi</Link> &{" "}
        <Link href={"https://ui.aceternity.com/components"}>Aceternity</Link>,
        you can find them in the components folder or more in their own website
      </p>

      <h2>EzStart Components</h2>
      <p className="text-muted-foreground">
        I create some components for my projects in the same systeme of shadcnui
        but i adding some features like auto translation display
      </p>
      <h2>Special EzStart Components</h2>
      <ul className="flex gap-4 justify-center">
        <li className="flex gap-4 justify-center">
          <Button>
            <Link href="/docs/components/nav">Navigation: Nav.tsx</Link>
          </Button>
        </li>
        <li className="flex gap-4 justify-center">
          <Button>
            <Link href="/docs/components/logo">Logo.tsx</Link>
          </Button>
        </li>
        <li className="flex gap-4 justify-center">
          <Button>
            <Link href="/docs/components/carousel-3d">Carousel3D.tsx</Link>
          </Button>
        </li>
      </ul>
    </Section>
  );
};

export default ComponentPage;
