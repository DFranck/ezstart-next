"use client";
import Section from "@/components/layout/section";
import { useRouter } from "next/navigation";

const navItems = [
  { title: "Get Started", href: "/docs/get-started" },
  { title: "Features", href: "/docs/features" },
  { title: "Authentication", href: "/docs/authentication" },
  { title: "Internationalization", href: "/docs/internationalization" },
  { title: "Theming", href: "/docs/theming" },
  { title: "Form Management", href: "/docs/form-management" },
  { title: "Animations", href: "/docs/animations" },
  { title: "Database Management", href: "/docs/database-management" },
  { title: "Deployment", href: "/docs/deployment" },
  { title: "FAQ", href: "/docs/faq" },
  { title: "Contributing", href: "/docs/contributing" },
];

const Theming = () => {
  const router = useRouter();

  return (
    <Section className="">
      <h1>Theming</h1>
    </Section>
  );
};

export default Theming;
