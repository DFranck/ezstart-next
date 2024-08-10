import ComingSoon from '@/components/coming-soon';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
const DocPayment = () => {
  const t2 = useTranslations('pages.docs');
  return (
    <>
      <ComingSoon />
      <Section className="">
        <Button asChild className="w-fit self-end " size={'lg'}>
          <Link href="components">{t2('nav-links.components')}</Link>
        </Button>
      </Section>
    </>
  );
};

export default DocPayment;
