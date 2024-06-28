"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignInForm = () => {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("App.Auth.SignInForm");
  const err = useTranslations("Errors");
  const formStyle =
    "bg-accent border shadow rounded-md p-4 flex flex-col gap-4 ";
  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data
  ) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      const updatedSession = await getSession();
      console.log("role of the user", updatedSession?.user.role);
      if (updatedSession?.user.role === "admin") {
        router.push(`/${locale}/admin`);
      } else {
        router.push(`/${locale}/user`);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formStyle}>
        <h2 className="text-center text-xl font-semibold">{t("title")}</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              <FormDescription>{t("emailDescription")}</FormDescription>
              {form.formState.errors.email?.message && (
                <p className="text-sm font-medium text-destructive">
                  {err(form.formState.errors.email.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("passwordLabel")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t("passwordPlaceholder")}
                  {...field}
                />
              </FormControl>
              {form.formState.errors.password?.message && (
                <p className="text-sm font-medium text-destructive">
                  {err(form.formState.errors.password.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit self-end">
          {t("signInButton")}
        </Button>
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
        <div className="mt-4 text-justify w-full">
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
            {t("forgotPasswordText")}
            <Link
              href="/auth/forgot-password"
              className="text-primary underline"
            >
              {t("resetPasswordLink")}
            </Link>
          </p>
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
            {t("noAccountText")}
            <Link
              href={`/${locale}/auth/signup`}
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

export default SignInForm;
