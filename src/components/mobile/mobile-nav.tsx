"use client";
import Burger from "@/components/burger";
import Nav from "@/components/nav";
import { Home, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("layout.header");
  const { data: session } = useSession();
  const user = session?.user;
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t shadow"
        onClick={() => handleClick()}
      >
        {isOpen && (
          <div className="bg-accent text-accent-foreground border-t border-primary z-50">
            <Nav
              ulClass="flex flex-col p-2"
              navClass="flex flex-col"
              liClass="text-left p-2"
              t="pages"
              render="nav-links"
              root={[0]}
              dir="col"
              active
              variant="primary"
              subNavClass="text-right"
              setIsOpen={setIsOpen}
              subNavProps={{
                ulClass: "text-right  mt-2",
                liClass: "text-right p-2 ",
              }}
            />
          </div>
        )}
        <div className="grid grid-cols-3 items-center bg-background shadow-md">
          <Link href={`/${locale}`} className="w-full flex justify-center py-2">
            <Home className="w-9 h-9" strokeWidth={1.5} />
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-center py-2"
          >
            <Burger isOpen={isOpen} />
          </div>
          <Link href={`/profile`} className="w-full flex justify-center py-2">
            <User className="w-9 h-9" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
