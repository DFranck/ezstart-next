'use client';

import CodeBlock from '@/components/code-block';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const DocGetStarted = () => {
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('pages.docs.get-started');
  const t2 = useTranslations('pages.docs');
  const variables = t.raw('sections.setup-env.variables') as Array<{
    name: string;
    description: string;
    link?: string;
    code?: string;
  }>;

  const [isHelperOpen, setIsHelperOpen] = useState(false);
  return (
    <>
      <Section id="installation" className="py-0">
        <h2 id="installation">{t('sections.installation.title')}</h2>
        <Button
          variant={'ghost'}
          onClick={() => setIsContributeOpen(!isContributeOpen)}
        >
          {!isContributeOpen
            ? t('sections.installation.contribute')
            : t('sections.installation.use')}
        </Button>
        {!isContributeOpen ? (
          <CodeBlock src="// bash" code={t('sections.installation.step-use')} />
        ) : (
          <CodeBlock
            src="// bash"
            code={t('sections.installation.step-contribute')}
          />
        )}
      </Section>
      <Section id="setup-env" className="py-0">
        <h2 id="setup-env">{t('sections.setup-env.title')}</h2>
        <CodeBlock src="// .env" code={t('sections.setup-env.steps')} />
        <p
          className="text-muted-foreground text-sm cursor-pointer w-full mb-2 text-left"
          onClick={() => setIsHelperOpen(!isHelperOpen)}
        >
          {t('sections.setup-env.helper-cta')}
        </p>
        <div
          className="overflow-hidden transition-all duration-1000 w-full"
          style={{ maxHeight: isHelperOpen ? '500px' : '0px' }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="my-0">
                {t('sections.setup-env.helper-title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc">
                {variables.map(({ name, link }, index) => (
                  <li key={index} id={name}>
                    <a href={link} target="_blank" className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section id="start" className="py-0">
        <h2 className="mt-8 mb-4 ">{t('sections.start.title')}</h2>
        <CodeBlock src="// bash" code={t('sections.start.steps')} />
      </Section>
      <h2 className="">{t('sections.enjoy.title')}</h2>
      <p className="mb-10">{t('sections.enjoy.description')}</p>
      <Section>
        <Button asChild className="w-fit self-end" size={'lg'}>
          <Link href={`/${locale}/docs/internationalization`}>
            {t2('nav-links.internationalization')}
          </Link>
        </Button>
      </Section>
    </>
  );
};

export default DocGetStarted;
