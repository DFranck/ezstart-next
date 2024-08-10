import { useTranslations } from 'next-intl';

export const useZodTranslation = () => {
  const t = useTranslations('Zod');
  return {
    emailRequired: t('emailRequired'),
    invalidEmail: t('invalidEmail'),
    passwordRequired: t('passwordRequired'),
    passwordMin: t('passwordMin'),
    passwordMax: t('passwordMax'),
  };
};
