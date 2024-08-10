// pages/auth/signin.tsx
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UserAuth from '@/features/auth/components/user-auth';
import LocaleSwitcher from '@/features/internationalization/locale-switcher';
import { ThemeSwitcher } from '@/features/theme/theme-switcher';
import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const UserMen = () => {
  const t = useTranslations('layout.user-menu');
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const session = useSession();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const user = session.data?.user;
  const liStyle =
    'p-2 hover:bg-accent text-sm flex items-center gap-5 cursor-pointer';

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

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [isOpen]);

  if (user) {
    return (
      <div className="relative" onBlur={handleBlur}>
        <Avatar
          className="cursor-pointer relative w-9 h-9"
          onClick={handleOpen}
          onKeyDown={handleKeyDown}
        >
          {user.image ? (
            <Image
              src={user.image}
              width={50}
              height={50}
              alt={user.name ?? ''}
              className="rounded-full"
            />
          ) : (
            <Avatar
              className="cursor-pointer relative w-9 h-9"
              onClick={handleOpen}
              onKeyDown={handleKeyDown}
            >
              <AvatarImage src={'https://github.com/shadcn.png'} />
            </Avatar>
          )}
        </Avatar>
        {isOpen && (
          <ul
            ref={dropdownRef}
            tabIndex={-1}
            className={cn(
              'absolute top-10 right-0 z-20 bg-background border shadow rounded  duration-200 min-w-[300px] w-fit p-2 space-y-2',
            )}
          >
            <li>
              <Link
                href={`/${locale}/${
                  user.role === 'admin' ? 'dashboard' : 'profile'
                }`}
                className={liStyle}
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    width={36}
                    height={36}
                    alt={user.name ?? ''}
                    className="w-9 h-9 flex justify-center items-center rounded-full"
                  />
                ) : (
                  <Avatar className="w-9 h-9 rounded-full">
                    <AvatarImage src={'https://github.com/shadcn.png'} />
                    <AvatarFallback>{user.name ?? ''}</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <span>{user.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/settings`} className={liStyle}>
                <span className="w-9 h-9 flex justify-center items-center">
                  <Settings className="w-4 h-4" />
                </span>
                <span>{t('settings')}</span>
              </Link>
            </li>
            <li>
              <UserAuth className={liStyle} />
            </li>
            <li className="flex justify-end gap-2">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </li>
          </ul>
        )}
      </div>
    );
  }

  return null;
};

export default UserMen;
