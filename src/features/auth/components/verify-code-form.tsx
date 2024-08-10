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
import { resetCodeSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const VerifyCodeForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const locale = useLocale();
  const tForm = useTranslations('app.auth.forms.verify-code-form');
  const err = useTranslations('app.errors');
  const router = useRouter();

  const codeForm = useForm<z.infer<typeof resetCodeSchema>>({
    resolver: zodResolver(resetCodeSchema),
    defaultValues: {
      resetCode: '',
    },
  });

  const handleCodeSubmit: SubmitHandler<
    z.infer<typeof resetCodeSchema>
  > = async (data) => {
    setIsFetching(true);
    const result = await fetch('/api/auth/verify-reset-code', {
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
      router.push(`/${locale}/reset-password?code=${data.resetCode}`);
    }
  };

  return (
    <div className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto">
      <FormProvider {...codeForm}>
        <form onSubmit={codeForm.handleSubmit(handleCodeSubmit)}>
          <div>
            <h2 className="text-center text-lg font-semibold ">
              {tForm('title')}
            </h2>
            <p className="text-muted-foreground text-xs text-center">
              {tForm('subtitle')}
            </p>
          </div>
          <FormField
            control={codeForm.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">
                  {tForm('verify-code-label')}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={tForm('verify-code-placeholder')}
                    {...field}
                  />
                </FormControl>
                {codeForm.formState.errors.resetCode?.message && (
                  <p className="text-sm font-medium text-destructive">
                    {err(codeForm.formState.errors.resetCode.message)}
                  </p>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" className={cn('w-full mt-2 text-sm h-fit p-1')}>
            {isFetching ? <Loader /> : tForm('verify')}
          </Button>
        </form>
      </FormProvider>
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
      <div className="mt-4 text-justify text-xs w-full">
        <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 mt-2">
          <Link
            href="/auth/sign-in"
            className="text-muted-foreground text-xs hover:underline w-full text-end"
          >
            {tForm('back')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
