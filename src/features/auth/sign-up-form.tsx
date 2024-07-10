"use client";
import ErrorForm from "@/components/errorForm";
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
import UserAuth from "@/features/auth/user-auth";
import { signUpSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpForm = () => {
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("App.Auth.SignUpForm");
  const tAuth = useTranslations("app.auth");
  const tForm = useTranslations("app.auth.forms.sign-up-form");

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = async (
    data
  ) => {
    setIsFetching(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setIsFetching(false);
        const errorData = await res.json();
        throw new Error(errorData.message);
      }

      const result = await res.json();
      console.log("User signed up successfully", result);
      setIsFetching(false);
      router.push(`/${locale}/sign-in`);
    } catch (error: unknown) {
      console.error("signup", error);
      if (error instanceof Error) {
        form.setError("email", { type: "manual", message: error.message });
      } else {
        form.setError("email", { type: "manual", message: "Signup failed" });
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto"
      >
        <div>
          <h2 className="text-center text-lg font-semibold">
            {tForm("title")}
          </h2>
          <p className="text-muted-foreground text-xs text-center">
            {tForm("subtitle")}
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
          {tAuth("forms.or")}
          <span className="border border-muted-foreground/20 w-full"></span>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                {tAuth("forms.email-label")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={tAuth("forms.email-placeholder")}
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
                {tAuth("forms.password-label")}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={tAuth("forms.password-placeholder")}
                  label={tAuth("forms.password-label")}
                />
              </FormControl>
              {form.formState.errors.password?.message && (
                <ErrorForm name="password" form={form} />
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                {tAuth("forms.confirm-password-label")}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  field={field}
                  placeholder={tAuth("forms.confirm-password-placeholder")}
                  label={tAuth("forms.confirm-password-label")}
                />
              </FormControl>
              {form.formState.errors.confirmPassword?.message && (
                <ErrorForm name="confirmPassword" form={form} />
              )}
            </FormItem>
          )}
        />
        <UserAuth />
        <div className="mt-4 text-center w-full text-xs">
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
            {tForm("already-have-account")}{" "}
            <Link
              href={`/${locale}/sign-in`}
              className="text-primary underline"
            >
              {tAuth("sign-in")}
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
