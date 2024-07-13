"use client";
import Section from "@/components/layout/section";
import ForgotForm from "@/features/auth/forgot-form";
import ResetPasswordForm from "@/features/auth/resest-password-form";
import SignInForm from "@/features/auth/sign-in-form";
import SignUpForm from "@/features/auth/sign-up-form";
import VerifyCodeForm from "@/features/auth/verify-code-form";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
const FormPage = () => {
  const { auth: form } = useParams();
  const t2 = useTranslations("app.common");
  let FormComponent;
  switch (form) {
    case "forgot-password":
      FormComponent = ForgotForm;
      break;
    case "reset-password":
      FormComponent = ResetPasswordForm;
      break;
    case "sign-in":
      FormComponent = SignInForm;
      break;
    case "sign-up":
      FormComponent = SignUpForm;
      break;
    case "verify-reset-code":
      FormComponent = VerifyCodeForm;
      break;
    default:
      return (
        <Section className="absolute bg-background w-full h-full top-0 left-0 z-10 gap-10">
          <p>
            {t2("sorry")} {t2("not-found")}
          </p>
          <Link href="/" className="hover:underline">
            {t2("go-back")}
          </Link>
        </Section>
      );
  }

  return (
    <>
      <FormComponent />
    </>
  );
};

export default FormPage;
