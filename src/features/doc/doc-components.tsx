'use client';
import Section from '@/components/shared/section';
import AuthSvg from '@/components/svgs/auth-svg';
import CodeSvg from '@/components/svgs/code-svg';
import ComponentSvg from '@/components/svgs/component-svg';
import DbSvg from '@/components/svgs/db-svg';
import EzStartSvg from '@/components/svgs/ezstart-svg';
import GithubSvg from '@/components/svgs/github-svg';
import GlobalSvg from '@/components/svgs/global-svg';
import GoogleSvg from '@/components/svgs/google-svg';
import ImagePlaceholderSvg from '@/components/svgs/image-placeholder-svg';
import IntlSvg from '@/components/svgs/intl-svg';
import NextSvg from '@/components/svgs/next-svg';
import PaymentSvg from '@/components/svgs/payment-svg';
import PrismaSvg from '@/components/svgs/prisma-svg';
import ReactHookFormSvg from '@/components/svgs/react-hook-form-svg';
import ReactSvg from '@/components/svgs/react-svg';
import SecureSvg from '@/components/svgs/secure-svg';
import StackSvg from '@/components/svgs/stack-svg';
import StripeSvg from '@/components/svgs/stripe-svg';
import TailwindSvg from '@/components/svgs/tailwind-svg';
import TypescriptSvg from '@/components/svgs/typescript-svg';
import ZodSvg from '@/components/svgs/zod-svg';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const layoutComponents = [
  {
    name: 'Nav',
    path: 'nav',
    description: 'Documentation pour le composant de navigation.',
  },
  {
    name: 'Section',
    path: 'section',
    description: 'Documentation pour le composant de section.',
  },
];

const uiComponents = [
  {
    name: 'Carousel3D',
    path: 'carousel-3d',
    description: 'Documentation pour le composant de carousel 3D.',
  },
];
const svgClassName = 'w-40 h-40';
const svgComponents = [
  {
    name: 'AuthSvg',
    component: <AuthSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/auth-svg.tsx',
  },
  {
    name: 'EzStartSvg',
    component: <EzStartSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/ezstart-svg.tsx',
  },
  {
    name: 'CodeSvg',
    component: <CodeSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/code-svg.tsx',
  },
  {
    name: 'ComponentSvg',
    component: <ComponentSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/component-svg.tsx',
  },
  {
    name: 'DbSvg',
    component: <DbSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/db-svg.tsx',
  },
  {
    name: 'GithubSvg',
    component: <GithubSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/github-svg.tsx',
  },
  {
    name: 'GlobalSvg',
    component: <GlobalSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/global-svg.tsx',
  },
  {
    name: 'GoogleSvg',
    component: <GoogleSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/google-svg.tsx',
  },
  {
    name: 'ImagePlaceholderSvg',
    component: <ImagePlaceholderSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/image-placeholder-svg.tsx',
  },
  {
    name: 'IntlSvg',
    component: <IntlSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/intl-svg.tsx',
  },
  {
    name: 'NextSvg',
    component: <NextSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/next-svg.tsx',
  },
  {
    name: 'PaymentSvg',
    component: <PaymentSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/payment-svg.tsx',
  },
  {
    name: 'PrismaSvg',
    component: <PrismaSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/prisma-svg.tsx',
  },
  {
    name: 'ReactHookFormSvg',
    component: <ReactHookFormSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/react-hook-form-svg.tsx',
  },
  {
    name: 'ReactSvg',
    component: <ReactSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/react-svg.tsx',
  },
  {
    name: 'SecureSvg',
    component: <SecureSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/secure-svg.tsx',
  },
  {
    name: 'StackSvg',
    component: <StackSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/stack-svg.tsx',
  },
  {
    name: 'StripeSvg',
    component: <StripeSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/stripe-svg.tsx',
  },
  {
    name: 'TailwindSvg',
    component: <TailwindSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/tailwind-svg.tsx',
  },
  {
    name: 'TypescriptSvg',
    component: <TypescriptSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/typescript-svg.tsx',
  },
  {
    name: 'ZodSvg',
    component: <ZodSvg className={svgClassName} />,
    githubUrl:
      'https://github.com/DFranck/my-ez-start/blob/master/src/components/svgs/zod-svg.tsx',
  },
];
const DocComponents = () => {
  const t = useTranslations('pages.docs.components');

  return (
    <>
      <Section className="">
        <h2>{t('layout-components-title')}</h2>
        <p>{t('layout-components-subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {layoutComponents.map((component) => (
            <Link href={`components/${component.path}`} key={component.name}>
              <Card className="hover:shadow-lg transition-shadow duration-200 h-full">
                <CardContent>
                  <CardTitle>{component.name}</CardTitle>
                  <CardDescription className="text-center">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="">
        <h2>{t('ui-components-title')}</h2>
        <p>{t('ui-components-subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {uiComponents.map((component) => (
            <Link href={`components/${component.path}`} key={component.name}>
              <Card className="hover:shadow-lg transition-shadow duration-200  h-full">
                <CardContent>
                  <CardTitle>{component.name}</CardTitle>
                  <CardDescription className="text-center">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="">
        <h2>{t('icon-components-title')}</h2>
        <p>{t('icon-components-subtitle')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-5">
          {svgComponents.map((component) => (
            <Link
              href={component.githubUrl}
              key={component.name}
              target="_blank"
              className="group"
            >
              <div className="bg-red-500 transition-all rounded shadow-md hover:scale-105 hover:shadow-lg duration-200 flex justify-center items-center">
                {component.component}
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default DocComponents;
