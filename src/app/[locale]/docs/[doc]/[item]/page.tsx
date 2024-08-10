'use client';
import Carousel3d from '@/components/carousel-3d';
import CodeBlock from '@/components/code-block';
import Nav from '@/components/nav';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { ComponentType } from 'react';

interface ComponentPropsMap {
  [key: string]: ComponentType<any>;
}

const componentMap: ComponentPropsMap = {
  Nav,
  Section,
  Carousel3d, // Ensure this key matches the normalized name exactly
  // Add other components here as necessary
};

const normalizeComponentName = (name: string) => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
};

const getExamples = (item: string) => {
  switch (item.toLowerCase()) {
    case 'nav':
      return {
        show: false,
        normalExemple: ``,
        staticExample: `import Nav from '@/components/nav';\n\nconst App = () => (\n  <Nav links={['Home', 'About', 'Contact']} />\n);`,
        dynamicExample: `import Nav from '@/components/nav';\n\nconst App = () => (\n  <Nav t='nav' render='links' />\n);`,
        jsonExample: `{\n  "nav": {\n    "links": ["Home", "About", "Contact"]\n  }\n}`,
      };
    case 'section':
      return {
        show: false,
        normalExemple: `import Section from '@/components/section';\n\nconst App = () => (\n  <Section className='custom-class' id='section1'>Content</Section>\n);`,
        staticExample: ``,
        dynamicExample: ``,
        jsonExample: ``,
      };
    case 'carousel-3d':
      return {
        show: true,
        normalExemple: `import Carousel3D from '@/components/carousel-3d';\n\nconst App = () => (\n  <Carousel3D imgNum={5} stopOnHover>\n    <img src='/path/to/image1.jpg' alt='Image 1' />\n    <img src='/path/to/image2.jpg' alt='Image 2' />\n  </Carousel3D>\n);`,
        staticExample: ``,
        dynamicExample: ``,
        jsonExample: ``,
      };
    // Add cases for other components here
    default:
      return {
        show: false,
        normalExemple: '',
        staticExample: '',
        dynamicExample: '',
        jsonExample: '',
      };
  }
};

const ItemPage = ({
  params: { item },
}: {
  params: { doc: string; item: string };
}) => {
  const locale = useLocale();
  const t2 = useTranslations('pages.docs');
  const t = useTranslations('pages.docs.components');
  const normalizedItem = normalizeComponentName(item);
  const Component = componentMap[normalizedItem];
  let propTypes;

  try {
    propTypes = t.raw(`${item}.props`);
    if (!Array.isArray(propTypes)) {
      throw new Error('propTypes is not an array');
    }
  } catch (error) {
    console.error('Error fetching propTypes:', error);
  }

  if (!Component || !Array.isArray(propTypes)) {
    return (
      <Section className="absolute bg-background w-full h-full top-0 left-0 z-10 gap-10">
        <p>{t('not-found', { item: normalizedItem })}</p>
        <Link href="/" className="hover:underline">
          {t('go-back')}
        </Link>
      </Section>
    );
  }
  const cellStyle = 'py-2 px-4 border-b';
  const examples = getExamples(item);
  const h1 = `<${normalizedItem} />`;
  return (
    <>
      <Section className="pb-0">
        <h1>{h1}</h1>
      </Section>
      {examples.show && <Component />}
      <Section>
        <h2>{t('usage-title')}</h2>
        <p>{t('usage-description', { item: normalizedItem })}</p>
        {examples.normalExemple && (
          <>
            <CodeBlock src={`// any.tsx`} code={examples.normalExemple} />
          </>
        )}
        {examples.staticExample && (
          <>
            <h3>{t('nav.static')}</h3>
            <CodeBlock src={`// static mode`} code={examples.staticExample} />
          </>
        )}
        {examples.dynamicExample && (
          <>
            <h3>{t('nav.dynamic')}</h3>
            <CodeBlock src={`// dynamic mode`} code={examples.dynamicExample} />
          </>
        )}
        {examples.jsonExample && (
          <CodeBlock src={`// en.json`} code={examples.jsonExample} />
        )}
      </Section>

      <Section>
        <h2 className="mb-10">{t('props-title')}</h2>
        <div className="overflow-x-auto w-full rounded-xl border shadow bg-card text-card-foreground">
          <table className="min-w-full">
            <thead>
              <tr className="text-left ">
                <th className={cellStyle}>Prop</th>
                <th className={cn('hidden sm:table-cell', cellStyle)}>Type</th>
                <th className={cellStyle}>Description</th>
                <th className={cn('hidden md:table-cell', cellStyle)}>
                  {t('default')}
                </th>
              </tr>
            </thead>
            <tbody>
              {propTypes.map((prop: any) => (
                <tr key={prop.name}>
                  <td className={cellStyle}>{prop.name}</td>
                  <td className={cn('hidden sm:table-cell', cellStyle)}>
                    {prop.type}
                  </td>
                  <td className={cellStyle}>{prop.description}</td>
                  <td className={cn('hidden md:table-cell', cellStyle)}>
                    {prop.default}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {propTypes.some((prop: any) => prop.options) && (
        <Section>
          <h2>{t('variants-title')}</h2>
          <p>{t('variants-description', { item: normalizedItem })}</p>
          <ul className="list-disc w-full pl-5 mt-4">
            {propTypes
              .filter((prop: any) => prop.options)
              .map((prop: any) => (
                <li key={prop.name}>
                  <strong>{prop.name}</strong> : {prop.options.join(', ')}
                </li>
              ))}
          </ul>
          <p>{t('note')}</p>
        </Section>
      )}

      <Section>
        <Button asChild className="w-fit self-end" size={'lg'}>
          <Link href={`/${locale}/docs/components`}>
            {t2('nav-links.components')}
          </Link>
        </Button>
      </Section>
    </>
  );
};

export default ItemPage;
