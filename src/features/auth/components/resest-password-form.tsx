'use client';
import Loader from '@/components/loader';
import PasswordInput from '@/components/passwordInput';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { newPasswordSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const ResetPasswordForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const locale = useLocale();
  const tForm = useTranslations('app.auth.forms.reset-password-form');
  const tAuth = useTranslations('app.auth');
  const err = useTranslations('app.errors');
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetCode = searchParams.get('code');

  const passwordForm = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (!resetCode) {
      setError('Invalid or missing reset code.');
    }
  }, [resetCode]);

  const handlePasswordSubmit: SubmitHandler<
    z.infer<typeof newPasswordSchema>
  > = async (data) => {
    if (!resetCode) {
      setError('Invalid or missing reset code.');
      return;
    }
    setIsFetching(true);
    const result = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        resetCode,
      }),
    });
    const resultData = await result.json();
    if (!result?.ok) {
      setError(err(`${resultData.message}`));
      setIsFetching(false);
    } else {
      setIsFetching(false);
      router.push(`/${locale}/sign-in`);
    }
  };

  return (
    <FormProvider {...passwordForm}>
      <form
        onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
        className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto"
      >
        <div>
          <h2 className="text-center text-lg font-semibold ">
            {tForm('title')}
          </h2>
          <p className="text-muted-foreground text-xs text-center">
            {tForm('subtitle')}
          </p>
        </div>
        <FormField
          control={passwordForm.control}
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
              {passwordForm.formState.errors.password?.message && (
                <p className="text-sm font-medium text-destructive">
                  {err(passwordForm.formState.errors.password.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={passwordForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                {tAuth('forms.confirm-password-label')}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={tAuth('forms.confirm-password-placeholder')}
                  label={tAuth('forms.confirm-password-label')}
                />
              </FormControl>
              {passwordForm.formState.errors.confirmPassword?.message && (
                <p className="text-sm font-medium text-destructive">
                  {err(passwordForm.formState.errors.confirmPassword.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className={cn('w-full mt-2 text-sm h-fit p-1')}>
          {isFetching ? <Loader /> : tForm('reset')}
        </Button>
        {error && (
          <div className="flex gap-1 items-center mt-2">
            <span className="bg-destructive rounded-full p-1 text-destructive-foreground w-4 h-4 flex justify-center items-center text-xs">
              !
            </span>
            <p className="text-destructive text-sm font-normal text-start">
              {error}
            </p>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default ResetPasswordForm;
