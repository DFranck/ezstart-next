'use client';
import Section from '@/components/shared/section';
import AuthSvg from '@/components/svgs/auth-svg';
import NextIntl from '@/components/svgs/intl-svg';
import NextSvg from '@/components/svgs/next-svg';
import PrismaSvg from '@/components/svgs/prisma-svg';
import ReactHookFormSvg from '@/components/svgs/react-hook-form-svg';
import ReactSvg from '@/components/svgs/react-svg';
import TailwindSvg from '@/components/svgs/tailwind-svg';
import ZodSvg from '@/components/svgs/zod-svg';
import { Button } from '@/components/ui/button';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
const DocsPage = () => {
  const t = useTranslations('pages.docs');
  const cardStyle =
    'bg-card text-card-foreground list-disc p-4 gap-2 pl-6 rounded border shadow flex flex-col flex-grow';
  const cardTitleStyle = 'text-center text-xl font-semibold mb-2';
  const liStyle = 'flex gap-2 items-center list-none';
  const locale = useLocale();
  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Section id="primary-dependencies">
        <h2>{t('sections.primary-dependencies.title')}</h2>
        <p className="text-muted-foreground text-sm mb-4">
          {t('sections.primary-dependencies.description')}
        </p>
        <div className="flex gap-4 flex-wrap w-full">
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t('sections.primary-dependencies.framework')}
            </h3>
            <li className={liStyle}>
              <NextSvg />
              <Link href="https://nextjs.org/docs" target="_blank">
                Next.js
              </Link>
            </li>
            <li className={liStyle}>
              <ReactSvg />
              <Link href="https://react.dev/" target="_blank">
                React
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t('sections.primary-dependencies.orm')}
            </h3>
            <li className={liStyle}>
              <PrismaSvg />
              <Link href="https://www.prisma.io/docs/" target="_blank">
                Prisma
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t('sections.primary-dependencies.authentication')}
            </h3>
            <li className={liStyle}>
              <AuthSvg />
              <Link href="https://authjs.dev/" target="_blank">
                Auth.js
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t('sections.primary-dependencies.styling')}
            </h3>
            <li className={liStyle}>
              <TailwindSvg />
              <Link href="https://tailwindcss.com/docs" target="_blank">
                Tailwind CSS
              </Link>
            </li>
            <li className={liStyle}>
              <NextSvg />
              <Link
                href="https://github.com/pacocoursey/next-themes"
                target="_blank"
              >
                Next Themes
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t('sections.primary-dependencies.forms')}
            </h3>
            <li className={liStyle}>
              <ReactHookFormSvg />
              <Link href="https://react-hook-form.com/" target="_blank">
                React Hook Form
              </Link>
            </li>
            <li className={liStyle}>
              <ZodSvg />
              <Link href="https://zod.dev/" target="_blank">
                Zod
              </Link>
            </li>
          </ul>
          <ul className={cardStyle}>
            <h3 className={cardTitleStyle}>
              {t('sections.primary-dependencies.internationalization')}
            </h3>
            <li className={liStyle}>
              <NextIntl />
              <Link href="https://next-intl-docs.vercel.app/" target="_blank">
                NextIntl
              </Link>
            </li>
          </ul>
        </div>
      </Section>
      <Section>
        <Button asChild className="w-fit self-end" size={'lg'}>
          <Link href={`/${locale}/docs/get-started`}>Get Started</Link>
        </Button>
      </Section>
    </>
  );
};

export default DocsPage;
