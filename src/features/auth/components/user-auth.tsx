'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserAuth = ({
  className,
  setIsOpen,
}: {
  className?: string;
  setIsOpen?: (value: boolean) => void;
}) => {
  const locale = useLocale();
  const { data: session } = useSession();
  const pathname = usePathname();
  const user = session?.user;
  const t = useTranslations('app.auth');

  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: '/' });
  };

  if (
    !user &&
    pathname !== `/${locale}/sign-in` &&
    pathname !== `/${locale}/sign-up`
  ) {
    return (
      <div
        className={cn(
          'rounded-b max-lg:border-t max-lg:border-border max-lg:w-full max-lg:bg-secondary max-lg:p-5',
          className,
        )}
      >
        <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&amp;_li:not(:last-child):hover]:opacity-100 [&amp;_li:not(:last-child)]:opacity-60">
          <li>
            <Link href={`/${locale}/sign-in`} onClick={handleClick}>
              {t('sign-in')}
            </Link>
          </li>
          <li>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              href={`/${locale}/sign-up`}
              onClick={handleClick}
            >
              {t('sign-up')}
            </Link>
          </li>
        </ul>
      </div>
    );
  } else if (!user && pathname === `/${locale}/sign-in`) {
    return (
      <Button type="submit" className={cn('w-full mt-2 text-sm h-fit p-1')}>
        {t('sign-in')}
      </Button>
    );
  } else if (!user && pathname === `/${locale}/sign-up`) {
    return (
      <Button type="submit" className={cn('w-full mt-2 text-sm h-fit p-1')}>
        {t('sign-up')}
      </Button>
    );
  } else if (user) {
    return (
      <div className={cn('', className)} onClick={handleSignOut}>
        <span className="w-9 h-9 flex justify-center items-center">
          <LogOut className="w-4 h-4" />
        </span>
        <span>{t('sign-out')}</span>
      </div>
    );
  }

  return null;
};

export default UserAuth;
