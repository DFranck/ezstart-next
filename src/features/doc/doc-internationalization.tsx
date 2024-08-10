// pages/docs/DocInternationalization.tsx
import CodeBlock from '@/components/code-block';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const DocInternationalization = () => {
  const t = useTranslations('pages.docs.internationalization');
  const t2 = useTranslations('pages.docs');
  const locale = useLocale();
  return (
    <>
      <Section className="">
        <h2>Setup</h2>
        <p>
          {t('setup.part1')}{' '}
          <Link
            href="https://next-intl-docs.vercel.app/"
            target="_blank"
            className="font-normal"
          >
            {t('setup.link')}{' '}
          </Link>{' '}
        </p>
        <p className="mt-10">
          {t('setup.part2')} <code>messages</code> {t('setup.part3')}{' '}
          <code>fr.json</code> {t('setup.and')} <code>en.json</code>{' '}
          {t('setup.or')}{' '}
        </p>
        <p className="mt-10">
          <AlertCircle className="inline text-destructive" />{' '}
          <span className="text-destructive font-normal">
            {t('setup.part4')} <code>`fr`</code> {t('setup.and')}{' '}
            <code>`en`</code> {t('setup.arePredefined')}{' '}
          </span>
          {t('setup.newLocale.part1')} <code>messages</code>,{' '}
          {t('setup.newLocale.part2')} <code>de.json</code>,{' '}
          {t('setup.newLocale.and')} <code>locales</code>{' '}
          {t('setup.newLocale.part3')}{' '}
        </p>
        <CodeBlock
          src="// src/i18n"
          code={`const locales = ["en", "fr", "de"];`}
        />
      </Section>
      <Section id="example-json" className="">
        <h2>{t('example-json.title')}</h2>
        <p>
          {t('example-json.description')}
          <code>fr.json</code> :
        </p>
        <CodeBlock
          src="// messages/fr.json"
          code={`{
  "home": {
    "welcome-message": "${t('example-json.welcome-message')}",
  },
  "about": {
    "title": "${t('example-json.exemple-title')}",
  }
}`}
        />
      </Section>
      <Section id="missing-translations" className="">
        <h2>{t('missing-translations.title')}</h2>
        <p>{t('missing-translations.description')}</p>
        <CodeBlock
          src={`${t('usage.components')}`}
          code={`const t = useTranslations('home');
const welcomeMessage = t('welcome-message', {
  fallback: 'Welcome to our site!'
});
return <h1>{welcomeMessage}</h1>;`}
        />
      </Section>
      <Section id="usage" className="">
        <h2>{t('usage.title')}</h2>
        <p>{t('usage.description')}</p>
        <CodeBlock
          src={`${t('usage.components')}`}
          code={`import { useTranslations } from 'next-intl';

const YourComponent = () => {
  const t = useTranslations('home');
  return <h1>{t('welcome-message')}</h1>;
};`}
        />
        <p className="mt-2">{t('usage.localeSwitcher')}</p>
        <CodeBlock
          src={`${t('usage.components')}`}
          code={`import LocaleSwitcher from '@/features/internationalization/locale-switcher';

const YourComponent = () => {
  return <LocaleSwitcher />;
};`}
        />
      </Section>
      <Section id="resources">
        <h2>{t('resources.title')}</h2>
        <p>{t('resources.description')}</p>
        <ul>
          <li>
            <Link
              href="https://next-intl-docs.vercel.app/"
              target="_blank"
              className="hover:underline"
            >
              {t('resources.nextIntl')}
            </Link>
          </li>
          <li>
            <Link
              href="https://www.i18next.com/"
              target="_blank"
              className="hover:underline"
            >
              {t('resources.i18next')}
            </Link>
          </li>
        </ul>
      </Section>
      <Section>
        <Button asChild className="w-fit self-end" size={'lg'}>
          <Link href={`/${locale}/docs/db-management`}>
            {t2('nav-links.db-management')}
          </Link>
        </Button>
      </Section>
    </>
  );
};

export default DocInternationalization;
