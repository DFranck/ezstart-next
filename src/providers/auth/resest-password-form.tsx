"use client";
import Loader from "@/components/loader";
import PasswordInput from "@/components/passwordInput";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { newPasswordSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const ResetPasswordForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const locale = useLocale();
  const t = useTranslations("App.Auth.SignInForm");
  const err = useTranslations("Errors");
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetCode = searchParams.get("code");

  const passwordForm = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (!resetCode) {
      setError("Invalid or missing reset code.");
    }
  }, [resetCode]);

  const handlePasswordSubmit: SubmitHandler<
    z.infer<typeof newPasswordSchema>
  > = async (data) => {
    if (!resetCode) {
      setError("Invalid or missing reset code.");
      return;
    }
    setIsFetching(true);
    const result = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
            {t("resetPasswordTitle")}
          </h2>
          <p className="text-muted-foreground text-xs text-center">
            {t("resetPasswordDescription")}
          </p>
        </div>
        <FormField
          control={passwordForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">{t("passwordLabel")}</FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={t("passwordPlaceholder")}
                  label={t("passwordLabel")}
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
                {t("confirmPasswordLabel")}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={t("confirmPasswordPlaceholder")}
                  label={t("confirmPasswordLabel")}
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
        <div>
          <Button type="submit" className={cn("w-full mt-2 text-sm h-fit p-1")}>
            {isFetching ? <Loader /> : t("resetPasswordButton")}
          </Button>
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 mt-2">
            <Link
              href="/auth/sign-in"
              className="text-muted-foreground text-xs hover:underline w-full text-end"
            >
              {t("back")}
            </Link>
          </p>
        </div>
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
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
            {t("noAccountText")}
            <Link
              href={`/${locale}/sign-up`}
              className="text-primary underline"
            >
              {t("signUpLink")}
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResetPasswordForm;
