"use client";

import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

const LocaleSwitcher = () => {
  const t = useTranslations("Locale");
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();
  const liStyle = "py-2 px-4 cursor-pointer hover:bg-accent text-sm";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const content = t.raw("language") as { [key: string]: string };
  const languages = Object.entries(content);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onValueChange = (nextLocale: string) => {
    const newPath = pathname.replace(localeActive, nextLocale);
    startTransition(() => {
      router.push(newPath);
    });
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [isOpen]);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="relative text-foreground" onBlur={handleBlur}>
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="cursor-pointer hover:bg-accent rounded w-9 h-9 flex justify-center items-center"
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        <GlobeIcon className="w-6 h-6" />
        <p className="sr-only">switch language</p>
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          tabIndex={-1}
          className={cn(
            "absolute top-10 right-0 z-10 bg-background border shadow rounded animate-fadeIn duration-200"
          )}
        >
          {languages.map(([key, value]) => (
            <li
              key={key}
              className={liStyle}
              onClick={() => onValueChange(key)}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onValueChange(key)}
            >
              {value}
            </li>
          ))}
          <div className="border border-border/50"></div>
        </ul>
      )}
    </div>
  );
};

export default LocaleSwitcher;
