'use client';
import Section from '@/components/shared/section';
import DocAuthentication from '@/features/doc/doc-authentication';
import DocComponents from '@/features/doc/doc-components';
import DocDbManagement from '@/features/doc/doc-db-management';
import DocGetStarted from '@/features/doc/doc-get-started';
import DocInternationalization from '@/features/doc/doc-internationalization';
import DocPayment from '@/features/doc/doc-payment';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const DocPage = ({ params: { doc } }: { params: { doc: string } }) => {
  const t2 = useTranslations('app.common');
  const t = useTranslations(`pages.docs.${doc}`);
  let DocComponent;
  switch (doc) {
    case 'get-started':
      DocComponent = DocGetStarted;
      break;
    case 'db-management':
      DocComponent = DocDbManagement;
      break;
    case 'internationalization':
      DocComponent = DocInternationalization;
      break;
    case 'authentication':
      DocComponent = DocAuthentication;
      break;
    case 'payment':
      DocComponent = DocPayment;
      break;
    case 'components':
      DocComponent = DocComponents;
      break;
    default:
      return (
        <Section className="absolute bg-background w-full h-full top-0 left-0 z-10 gap-10">
          <p>
            {t2('sorry')} {doc} {t2('not-found')}
          </p>
          <Link href="/" className="hover:underline">
            {t2('go-back')}
          </Link>
        </Section>
      );
  }

  return (
    <>
      {DocComponent && (
        <>
          <h1>{t('title')}</h1>
          <p className="text-justify lg:text-center">{t('description')}</p>
          <DocComponent />
        </>
      )}
    </>
  );
};

export default DocPage;
