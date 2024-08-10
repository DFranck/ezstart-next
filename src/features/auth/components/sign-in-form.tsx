'use client';
import ErrorForm from '@/components/errorForm';
import PasswordInput from '@/components/passwordInput';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import UserAuth from '@/features/auth/components/user-auth';
import { signInSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSession, signIn } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import OAuthButtons from './oauth-buttons';

const SignInForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const locale = useLocale();
  const tForm = useTranslations('app.auth.forms.sign-in-form');
  const tAuth = useTranslations('app.auth');
  const err = useTranslations('app.errors');
  const formStyle =
    'bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto';
  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data,
  ) => {
    setIsFetching(true);
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    console.log(isFetching);

    if (result?.error) {
      setError(err('configuration'));
      setIsFetching(false);
    } else {
      const updatedSession = await getSession();
      setIsFetching(false);
      router.push(`/${locale}`);
      if (updatedSession?.user.role === 'admin') {
        router.push(`/${locale}/dashboard`);
      } else {
        router.push(`/${locale}/profile`);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formStyle}>
        <div>
          <h2 className="text-center text-lg font-semibold">
            {tForm('title')}
          </h2>
          <p className="text-muted-foreground text-xs text-center">
            {tForm('subtitle')}
          </p>
        </div>
        <OAuthButtons />
        <div className="flex justify-between items-center gap-2 text-muted-foreground text-xs mt-2">
          <span className="border border-muted-foreground/20 w-full"></span>
          {tAuth('forms.or')}
          <span className="border border-muted-foreground/20 w-full"></span>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                {tAuth('forms.email-label')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={tAuth('forms.email-placeholder')}
                  {...field}
                />
              </FormControl>
              {form.formState.errors.email?.message && (
                <ErrorForm name="email" form={form} />
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                {tAuth('forms.password-label')}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={tAuth('forms.password-placeholder')}
                  label={tAuth('forms.password-label')}
                />
              </FormControl>

              {form.formState.errors.password?.message && (
                <ErrorForm name="password" form={form} />
              )}
            </FormItem>
          )}
        />
        <div>
          <UserAuth />
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 items-center mt-1">
            <Link
              href={`/${locale}/forgot-password`}
              className="text-muted-foreground text-xs hover:underline w-full text-end"
            >
              {tForm('forgot-password')}
            </Link>
          </p>
          {error && (
            <div className="flex gap-1 items-center">
              <span className="bg-destructive rounded-full p-1 text-destructive-foreground w-4 h-4 flex justify-center items-center text-xs">
                !
              </span>
              <p className="text-destructive text-sm font-semibold text-start">
                {error}
              </p>
            </div>
          )}
        </div>
        <div className="mt-4 text-justify text-xs w-full">
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
            {tForm('no-account')}
            <Link
              href={`/${locale}/sign-up`}
              className="text-primary underline"
            >
              {tAuth('sign-up')}
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
