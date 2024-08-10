import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const GetStarted = () => {
  const t = useTranslations('pages.home.sections.get-started');
  const content = t.raw('content') as string[];
  const locale = useLocale();
  return (
    <Section className="flex flex-col items-center text-justify lg:text-center py-12 px-4 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-center sm:gap-4">
        <Button asChild className="mb-6 text-lg px-8 py-6 font-bold">
          <Link href={`/${locale}/docs/get-started`}>{t('cta')}</Link>
        </Button>
        <Button
          asChild
          className="mb-6 text-lg px-8 py-6 font-bold"
          variant={'outline'}
        >
          <Link
            href="https://github.com/DFranck/my-ez-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" rounded-full mr-2 p-1">
              <svg
                viewBox="0 0 235 228"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M117.597 0C52.569 0 0 52.2498 0 116.89C0 168.56 33.6828 212.298 80.4097 227.778C86.2518 228.942 88.3917 225.263 88.3917 222.168C88.3917 219.459 88.1991 210.17 88.1991 200.492C55.4864 207.46 48.6743 186.558 48.6743 186.558C43.4171 173.011 35.6277 169.529 35.6277 169.529C24.9209 162.369 36.4076 162.369 36.4076 162.369C48.2843 163.143 54.5164 174.367 54.5164 174.367C65.0282 192.17 81.9671 187.14 88.7816 184.043C89.7541 176.495 92.8713 171.27 96.1811 168.368C70.0904 165.658 42.6396 155.595 42.6396 110.696C42.6396 97.9232 47.3094 87.4733 54.7089 79.346C53.5415 76.4438 49.4518 64.443 55.8788 48.3809C55.8788 48.3809 65.8081 45.2839 88.1967 60.3794C97.7821 57.8207 107.667 56.5191 117.597 56.5081C127.527 56.5081 137.648 57.8643 146.995 60.3794C169.386 45.2839 179.316 48.3809 179.316 48.3809C185.743 64.443 181.651 76.4438 180.483 79.346C188.078 87.4733 192.555 97.9232 192.555 110.696C192.555 155.595 165.104 165.463 138.818 168.368C143.103 172.044 146.8 179.01 146.8 190.042C146.8 205.717 146.608 218.297 146.608 222.166C146.608 225.263 148.75 228.942 154.59 227.781C201.317 212.296 234.999 168.56 234.999 116.89C235.192 52.2498 182.43 0 117.597 0Z"
                  fill={`hsl(var(--foreground))`}
                />
              </svg>
            </div>{' '}
            {t('github')}
          </Link>
        </Button>
      </div>
      <div className="max-w-5xl ">
        {content.map((paragraph: string, index: number) => (
          <p
            className="text-lg md:text-xl font-light mb-6 lg:text-justify"
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default GetStarted;
