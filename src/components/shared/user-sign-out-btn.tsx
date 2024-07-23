// src\components\shared\user-sign-out-btn.tsx
"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const UserSignOutBtn = () => {
  return (
    <Button
      variant={"outline"}
      size={"lg"}
      className="text-lg px-8 py-6"
      onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
    >
      Sign out
    </Button>
  );
};

export default UserSignOutBtn;
