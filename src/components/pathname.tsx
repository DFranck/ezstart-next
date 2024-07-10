"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Section from "./layout/section";

const Pathname = () => {
  const pathname = usePathname();
  const remainingPath = pathname.substring(pathname.indexOf("/", 1) + 1);
  const segments = remainingPath.split("/").filter(Boolean);
  return (
    <Section className="flex-row justify-start py-4 gap-2 flex-grow-0">
      <Link href="/">
        <Home className="h-4 w-4" />
      </Link>
      {segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join("/")}`;
        return (
          <span key={index} className="flex items-center gap-2">
            <span>/</span>
            <Link href={path} className="hover:underline">
              {segment}
            </Link>
          </span>
        );
      })}
    </Section>
  );
};

export default Pathname;
