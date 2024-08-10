'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export function ThemeSwitcher({
  className,
  menuPosition,
}: {
  className?: string;
  menuPosition?: number;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('app.theme');
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const liStyle = 'py-2 px-4 cursor-pointer hover:bg-accent text-lg lg:text-sm';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const onValueChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    } else if (event.key === 'Escape') {
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
    <div className={cn('relative text-foreground')} onBlur={handleBlur}>
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={cn(
          'cursor-pointer hover:bg-accent rounded w-9 h-9 flex justify-center items-center',
          className,
        )}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        {theme === 'light' ? (
          <Sun className="w-full h-full p-1" />
        ) : (
          <Moon className="w-full h-full p-1" />
        )}
        <p className="sr-only">switch language</p>
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          tabIndex={-1}
          className={cn(
            'absolute top-10 right-0 z-20 bg-background border shadow rounded animate-fadeIn duration-1000',
            menuPosition && `top-${menuPosition}`,
          )}
        >
          <li
            className={liStyle}
            onClick={() => onValueChange('dark')}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onValueChange('dark')}
          >
            {t('dark')}
          </li>
          <div className="border border-border/50"></div>
          <li
            className={liStyle}
            onClick={() => onValueChange('light')}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onValueChange('light')}
          >
            {t('light')}
          </li>
        </ul>
      )}
    </div>
  );
}
