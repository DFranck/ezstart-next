"use client";
import ForgotForm from "@/features/auth/forgot-form";
import SignInForm from "@/features/auth/sign-in-form";
import SignUpForm from "@/features/auth/sign-up-form";
import VerifyCodeForm from "@/features/auth/verify-code-form";
import ResetPasswordForm from "@/providers/auth/resest-password-form";
import { useParams } from "next/navigation";

const FormPage = () => {
  const { auth: form } = useParams();

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
      return <p>Form not found</p>;
  }

  return (
    <>
      <FormComponent />
    </>
  );
};

export default FormPage;
