"use client";
import ErrorForm from "@/components/errorForm";
import Loader from "@/components/loader";
import PasswordInput from "@/components/passwordInput";
import GithubSvg from "@/components/svgs/github-svg";
import GoogleSvg from "@/components/svgs/google-svg";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
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
  const [isFetching, setIsFetching] = useState(false);
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
    "bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto";
  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data
  ) => {
    setIsFetching(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.log(result);
      setError(err("configuration"));
      setIsFetching(false);
    } else {
      const updatedSession = await getSession();
      setIsFetching(false);
      console.log("role of the user", updatedSession?.user.role);
      if (updatedSession?.user.role === "admin") {
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
          <h2 className="text-center text-lg font-semibold">{t("title")}</h2>
          <p className="text-muted-foreground text-xs text-center">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2 text-center w-full">
          <Button
            className="border shadow rounded p-1 bg-white hover:bg-white/80"
            type="button"
            onClick={() => signIn("google")}
          >
            <GoogleSvg className="w-8" background="transparent" />
          </Button>
          <Button
            className="border shadow rounded p-1 bg-black hover:bg-black/80 dark:hover:bg-black/60"
            type="button"
            onClick={() => signIn("github")}
          >
            <GithubSvg className="w-8" background="transparent" />
          </Button>
        </div>
        <div className="flex justify-between items-center gap-2 text-muted-foreground text-xs mt-2">
          <span className="border border-muted-foreground/20 w-full"></span>
          {t("or")}
          <span className="border border-muted-foreground/20 w-full"></span>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} />
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
              <FormLabel className="sr-only">{t("passwordLabel")}</FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={t("passwordPlaceholder")}
                  label={t("passwordLabel")}
                />
              </FormControl>

              {form.formState.errors.password?.message && (
                <ErrorForm name="password" form={form} />
              )}
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className={cn("w-full mt-2 text-sm h-fit p-1")}>
            {isFetching ? <Loader /> : t("signInButton")}
          </Button>
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 items-center mt-1">
            <Link
              href={`/${locale}/forgot-password`}
              className="text-muted-foreground text-xs hover:underline w-full text-end"
            >
              {t("forgotPasswordText")}
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

export default SignInForm;
