'use client';
import Section from '@/components/shared/section';
import ForgotForm from '@/features/auth/components/forgot-form';
import ResetPasswordForm from '@/features/auth/components/resest-password-form';
import SignInForm from '@/features/auth/components/sign-in-form';
import SignUpForm from '@/features/auth/components/sign-up-form';
import VerifyCodeForm from '@/features/auth/components/verify-code-form';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
const FormPage = () => {
  const { auth: form } = useParams();
  const t2 = useTranslations('app.common');
  let FormComponent;
  switch (form) {
    case 'forgot-password':
      FormComponent = ForgotForm;
      break;
    case 'reset-password':
      FormComponent = ResetPasswordForm;
      break;
    case 'sign-in':
      FormComponent = SignInForm;
      break;
    case 'sign-up':
      FormComponent = SignUpForm;
      break;
    case 'verify-reset-code':
      FormComponent = VerifyCodeForm;
      break;
    default:
      return (
        <Section className="absolute bg-background w-full h-full top-0 left-0 z-10 gap-10">
          <p>
            {t2('sorry')} {t2('not-found')}
          </p>
          <Link href="/" className="hover:underline">
            {t2('go-back')}
          </Link>
        </Section>
      );
  }

  return (
    <>
      <FormComponent />
    </>
  );
};

export default FormPage;
