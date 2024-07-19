// src\components\shared\user-settings.tsx
"use client";

import LocaleSwitcher from "@/features/internationalization/locale-switcher";
import { ThemeSwitcher } from "@/features/theme/theme-switcher";
import Section from "./section";
import UserChangePasswordForm from "./user-change-password-form";

const UserSettings = () => {
  return (
    <>
      <div
        className="bg-primary absolute inset-x-0 top-0 w-full h-1/3 text-primary-foreground flex justify-between p-5 cursor-pointer"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 100%)" }}
      ></div>
      <Section className="flex flex-col items-center pt-0 px-0">
        <div className="w-full grid grid-cols-2 max-w-md mt-8">
          <div className="flex flex-col justify-center items-center">
            <h3 className="block mb-2">Language:</h3>
            <LocaleSwitcher className="w-16 h-16" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="block mb-4">Theme:</h3>{" "}
            <ThemeSwitcher className="w-16 h-16" />
          </div>
        </div>
      </Section>
      <UserChangePasswordForm />
    </>
  );
};

export default UserSettings;
