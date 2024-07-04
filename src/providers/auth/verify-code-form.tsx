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
import { resetCodeSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const VerifyCodeForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const locale = useLocale();
  const t = useTranslations("App.Auth.SignInForm");
  const err = useTranslations("Errors");
  const router = useRouter();

  const codeForm = useForm<z.infer<typeof resetCodeSchema>>({
    resolver: zodResolver(resetCodeSchema),
    defaultValues: {
      resetCode: "",
    },
  });

  const handleCodeSubmit: SubmitHandler<
    z.infer<typeof resetCodeSchema>
  > = async (data) => {
    setIsFetching(true);
    const result = await fetch("/api/auth/verify-reset-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resultData = await result.json();
    if (!result?.ok) {
      console.log(resultData.message);
      setError(err(`${resultData.message}`));
      setIsFetching(false);
    } else {
      setIsFetching(false);
      router.push(
        `/${locale}/auth/sign-in/reset-password?code=${data.resetCode}`
      );
      console.log("Code verified", resultData);
    }
  };

  return (
    <div className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4 max-w-[400px] w-full mx-auto">
      <FormProvider {...codeForm}>
        <form onSubmit={codeForm.handleSubmit(handleCodeSubmit)}>
          <div>
            <h2 className="text-center text-lg font-semibold ">
              {t("verifyCodeTitle")}
            </h2>
            <p className="text-muted-foreground text-xs text-center">
              {t("verifyCodeDescription")}
            </p>
          </div>
          <FormField
            control={codeForm.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">{t("resetCodeLabel")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("resetCodePlaceholder")} {...field} />
                </FormControl>
                {codeForm.formState.errors.resetCode?.message && (
                  <p className="text-sm font-medium text-destructive">
                    {err(codeForm.formState.errors.resetCode.message)}
                  </p>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" className={cn("w-full mt-2 text-sm h-fit p-1")}>
            {isFetching ? <Loader /> : t("verifyCodeButton")}
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
        <p className="text-sm text-muted-foreground w-full flex justify-between gap-2">
          {t("noAccountText")}
          <Link
            href={`/${locale}/auth/sign-up`}
            className="text-primary underline"
          >
            {t("signUpLink")}
          </Link>
        </p>
        <p className="text-sm text-muted-foreground w-full flex justify-between gap-2 mt-2">
          <Link
            href="/auth/sign-in"
            className="text-muted-foreground text-xs hover:underline w-full text-end"
          >
            {t("back")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
