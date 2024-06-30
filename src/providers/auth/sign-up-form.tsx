"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpForm = () => {
  const t = useTranslations("App.Auth.SignUpForm");
  const err = useTranslations("Errors");
  const router = useRouter();
  const methods = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const locale = useLocale();
  const formStyle =
    "bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto";
  const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = async (
    data
  ) => {
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
      console.log("User signed up successfully", result);
      router.push(`/${locale}/auth/signin`);
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
        <div>
          <h2 className="text-center text-lg font-semibold">{t("title")}</h2>
          <p className="text-muted-foreground text-xs text-center">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-2 text-center w-full">
          <div className="border shadow rounded p-1 flex-grow">
            Google coming soon
          </div>
          <div className="border shadow rounded p-1">Facebook coming soon</div>
          <div className="border shadow rounded p-1">Github coming soon</div>
        </div>
        <div className="flex justify-between items-center gap-2 text-muted-foreground text-xs">
          <span className="border w-full"></span>
          {t("or")}
          <span className="border w-full"></span>
        </div>
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              {methods.formState.errors.email?.message && (
                <p className="text-sm font-medium text-destructive">
                  {err(methods.formState.errors.email.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
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
              {methods.formState.errors.password?.message && (
                <p className="text-sm font-medium text-destructive">
                  {err(methods.formState.errors.password.message)}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-2">
          {t("signUpButton")}
        </Button>
        <div className="mt-4 text-center w-full text-xs">
          {/* <p className="text-sm text-muted-foreground opacity-0">signupform</p> */}
          <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
            {t("hasAccountText")}{" "}
            <Link
              href={`/${locale}/auth/signin`}
              className="text-primary underline"
            >
              {t("signInLink")}
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
