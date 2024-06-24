// pages/auth/signin.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession(); // Utilisez useSession pour obtenir la session

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        setError(null);
      }
    } catch (error) {
      console.error("signin", error);
      setError("Signin failed");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User signed in successfully", session);
    }
  }, [session, status]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
      {status === "authenticated" && session && (
        <div>
          <p>User signed in successfully!</p>
          <p>Email: {session.user?.email}</p>
          <p>Name: {session.user?.name}</p>
        </div>
      )}
    </form>
  );
}
