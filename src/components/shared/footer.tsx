// src\components\layout\footer.tsx
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('layout.footer');
  return (
    <footer className="bg-primary text-primary-foreground flex flex-col p-4 gap-4">
      <p>{t('copyright')}</p>
      <p>
        {t('owner')}
        <Link href={`https://dfranck.netlify.app/`} target="_blank">
          <b>Franck Dufournet</b>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
