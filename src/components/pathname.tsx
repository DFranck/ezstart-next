'use client';
import { Home } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Section from './shared/section';

const Pathname = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const remainingPath = pathname.substring(pathname.indexOf('/', 1) + 1);
  const segments = remainingPath.split('/').filter(Boolean);
  return (
    <Section className="flex-row justify-start py-4 gap-2 flex-grow-0">
      <Link href="/">
        <Home className="h-4 w-4" />
      </Link>
      {segments.map((segment, index) => {
        const path = `/${locale}/${segments.slice(0, index + 1).join('/')}`;
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
