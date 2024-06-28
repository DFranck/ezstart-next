import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Logo = ({ path = true }: { path?: boolean }) => {
  const t = useTranslations("Header");
  const title = t("title");
  const locale = useLocale();
  const pathname = usePathname();
  const pathSegments = pathname.slice(3).split("/").filter(Boolean);
  const [isPath, setIsPath] = useState(path);
  useEffect(() => {
    setIsPath(path);
  }, [path]);
  if (!title) return null;

  let cumulativePath = `/${locale}`;

  return (
    <div className="flex items-center">
      <Link
        className="rounded-full hover:opacity-80 flex items-center"
        href={`/${locale}/`}
      >
        <span className="sr-only">Logo</span>
        <h1 className="text-xl xl:text-2xl font-semibold pr-0.5">{title}</h1>
      </Link>
      {isPath &&
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
