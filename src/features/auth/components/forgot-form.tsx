'use client';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { emailSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const ForgotForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });
  const router = useRouter();
  const locale = useLocale();
  const tForm = useTranslations('app.auth.forms.forgot-form');
  const tAuth = useTranslations('app.auth');
  const err = useTranslations('app.errors');
  const formStyle =
    'bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] mx-auto';
  const onSubmit: SubmitHandler<z.infer<typeof emailSchema>> = async (data) => {
    setIsFetching(true);
    const result = await fetch('/api/auth/forgot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resultData = await result.json();
    if (!result?.ok) {
      setError(err(`${resultData.message}`));
      setIsFetching(false);
    } else {
      setIsFetching(false);
      router.push(`/${locale}/verify-reset-code`);
      // Here you can handle what happens next, like showing a message to check their email.
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formStyle}>
        <div>
          <h2 className="text-center text-lg font-semibold ">
            {tForm('title')}
          </h2>
          <p className="text-muted-foreground text-xs text-center">
            {tForm('subtitle')}
          </p>
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
                <p className="text-sm font-medium text-destructive">
                  {err(form.formState.errors.email.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className={cn('w-full mt-2 text-sm h-fit p-1')}>
            {isFetching ? <Loader /> : tForm('send')}
          </Button>
          <div className={cn('grid  mt-1', { 'grid-cols-2': error })}>
            {error && (
              <div className="flex gap-1 items-center">
                <span className="bg-destructive rounded-full p-1 text-destructive-foreground w-4 h-4 flex justify-center items-center text-xs">
                  !
                </span>
                <p className="text-destructive text-sm font-normal text-start">
                  {error}
                </p>
              </div>
            )}
            <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 items-center">
              <Link
                href={`/${locale}/sign-in`}
                className="text-muted-foreground text-xs hover:underline w-full text-end"
              >
                {tForm('back')}
              </Link>
            </p>
          </div>
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

export default ForgotForm;
