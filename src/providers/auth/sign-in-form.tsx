"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useValidationSchemas } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpForm = () => {
  const { signInSchema } = useValidationSchemas();
  const methods = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const locale = useLocale();
  const t = useTranslations("App.Auth.SignInForm");
  const formStyle =
    "bg-accent border shadow rounded-md p-4 flex flex-col gap-4 w-1/4";
  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data
  ) => {
    console.log("data", data);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }

      const result = await res.json();
      console.log("User signed in successfully", result);
    } catch (error: unknown) {
      console.error("signup", error);
      if (error instanceof Error) {
        methods.setError("email", { type: "manual", message: error.message });
      } else {
        methods.setError("email", { type: "manual", message: "Signup failed" });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={formStyle}>
        <h2 className="text-center text-xl font-semibold">{t("title")}</h2>
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              <FormDescription>{t("emailDescription")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit self-end">
          {t("signInButton")}
        </Button>
        {methods.formState.errors.email && (
          <p className="text-red-500">
            {methods.formState.errors.email.message}
          </p>
        )}
        {methods.formState.errors.password && (
          <p className="text-red-500">
            {methods.formState.errors.password.message}
          </p>
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

export default SignUpForm;
