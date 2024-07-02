import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Logo = ({
  path = undefined,
  className,
}: {
  path?: boolean;
  className?: string;
}) => {
  const t = useTranslations("Header");
  const title = t("title");
  const locale = useLocale();
  const pathname = usePathname();
  const pathSegments = pathname.slice(3).split("/").filter(Boolean);
  const [showPath, setShowPath] = useState(path ?? true);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowPath(true);
    } else {
      setShowPath(false);
    }
  };

  useEffect(() => {
    if (path !== undefined) {
      setShowPath(path);
    } else {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [path]);

  if (!title) return null;

  let cumulativePath = `/${locale}`;

  return (
    <div className={cn("flex items-center", className)}>
      <Link
        className="rounded-full hover:opacity-80 flex items-center"
        href={`/${locale}/`}
      >
        <span className="sr-only">Logo</span>
        <h1 className="text-xl md:text-xl xl:text-2xl font-semibold pr-0.5 mb-0.5">
          {title}
        </h1>
      </Link>
      {showPath &&
        pathSegments.map((segment, index) => {
          cumulativePath += `/${segment}`;
          return (
            <Link
              href={cumulativePath}
              key={index}
              className={cn(
                "text-lg xl:text-xl px-0.5 text-muted-foreground hover:-translate-y-0.5"
              )}
            >
              <span className="">/</span>
              {segment}
            </Link>
          );
        })}
    </div>
  );
};

export default Logo;
