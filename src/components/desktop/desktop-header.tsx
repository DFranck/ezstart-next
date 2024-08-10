'use client';
import Burger from '@/components/burger';
import Nav from '@/components/nav';
import LocaleSwitcher from '@/features/internationalization/locale-switcher';
import { ThemeSwitcher } from '@/features/theme/theme-switcher';
import useOnScroll from '@/hooks/useOnScroll';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import UserAuth from '../../features/auth/components/user-auth';
import EzStartSvg from '../svgs/ezstart-svg';
import UserMenu from '../user-menu';

export const DesktopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const scrollY = useOnScroll();
  const t = useTranslations('layout.header');
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <header
      className={cn('p-6 z-10 fixed w-full ', {
        'bg-background': isOpen,
        'p-2 bg-background': scrollY > 0,
      })}
    >
      <div className="mx-auto max-w-screen-lg h-fit">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <EzStartSvg background="transparent" />
            <h2 className="flex items-center text-xl font-semibold my-0">
              {t('app-title')}
            </h2>
          </Link>
          <Nav
            navClass="hidden lg:flex"
            t={'layout.header'}
            render={'nav-links'}
            root={[0]}
            dir={'row'}
          />
          {!user && (
            <UserAuth setIsOpen={setIsOpen} className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-2">
            {!user && (
              <>
                <LocaleSwitcher />
                <ThemeSwitcher />
              </>
            )}
            <Burger
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              className="flex lg:hidden"
            />
            <UserMenu />
          </div>
        </div>
        <div
          className={cn(
            'transition-all duration-500 ease-in-out lg:hidden overflow-hidden',
            { 'max-h-0': !isOpen, 'max-h-screen mt-4': isOpen },
          )}
        >
          <Nav
            navClass="bg-accent text-accent-foreground p-2 border-b border-primary"
            liClass="text-left p-2"
            t={'layout.header'}
            render={'nav-links'}
            root={[0]}
            dir={'col'}
            active
            variant={'primary'}
            setIsOpen={setIsOpen}
          />
          {pathname.includes(`/${locale}/docs`) && (
            <Nav
              t="pages.docs"
              navClass="bg-accent text-accent-foreground p-2"
              liClass="text-right p-2"
              render="nav-links"
              path="docs"
              dir={'col'}
              active
              variant={'primary'}
              setIsOpen={setIsOpen}
            />
          )}
          {!user && <UserAuth />}
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
