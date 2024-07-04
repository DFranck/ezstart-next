import { signOut } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import Link from "next/link";

const UserAuthLinks = ({
  className,
  setIsOpen,
}: {
  className?: string;
  setIsOpen?: (value: boolean) => void;
}) => {
  const locale = useLocale();
  const { data: session } = useSession();
  const user = session?.user;
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };
  const handleSignOut = () => {
    signOut();
    if (setIsOpen) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className={cn(
        "rounded-b max-lg:border-t max-lg:border-border max-lg:w-full max-lg:bg-secondary max-lg:p-5",
        className
      )}
    >
      <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&amp;_li:not(:last-child):hover]:opacity-100 [&amp;_li:not(:last-child)]:opacity-60">
        <li>
          <a href={`/${locale}/auth/sign-in`} onClick={handleClick}>
            Se connecter
          </a>
        </li>
        <li>
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            href={`/${locale}/auth/sign-up`}
            onClick={handleClick}
          >
            S&#39;inscrire
          </Link>
        </li>{" "}
      </ul>
    </div>
  );
};

export default UserAuthLinks;
