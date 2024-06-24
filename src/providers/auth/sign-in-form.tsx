"use client";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function SignInFrom() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      // Handle error
    } else {
      // Handle success
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-500">
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}
