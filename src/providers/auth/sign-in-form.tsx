"use client";
import Loader from "@/components/loader";
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
      setError(result.error);
    } else {
      const updatedSession = await getSession();
      setIsFetching(false);
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
        <div>
          <h2 className="text-center text-lg font-semibold">{t("title")}</h2>
          <p className="text-muted-foreground text-xs text-center">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-2 text-center w-full">
          <Button
            className="border shadow rounded p-1 flex-grow"
            onClick={() => signIn("google")}
          >
            Google coming soon
          </Button>
          <div className="border shadow rounded p-1">Facebook coming soon</div>
          <div className="border shadow rounded p-1">Github coming soon</div>
        </div>
        <div className="flex justify-between items-center gap-2 text-muted-foreground text-xs">
          <span className="border w-full"></span>
          {t("or")}
          <span className="border w-full"></span>
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
              {/* <FormDescription>{t("emailDescription")}</FormDescription> */}
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
              <FormLabel className="sr-only">{t("passwordLabel")}</FormLabel>
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
        <div>
          <Button
            type="submit"
            className={cn("w-full mt-2 text-sm", { "text-destructive": error })}
          >
            {!error ? isFetching ? <Loader /> : t("signInButton") : error}
          </Button>
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 mt-1">
            <Link
              href="/auth/forgot-password"
              className="text-muted-foreground text-xs hover:underline w-full text-end"
            >
              {t("forgotPasswordText")}
            </Link>
          </p>
          {/* {error && (
            <p className="text-sm font-medium text-destructive">{error}</p>
          )} */}
        </div>
        <div className="mt-4 text-justify text-xs w-full">
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
