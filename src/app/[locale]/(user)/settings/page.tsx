// src\app\[locale]\(user)\settings\page.tsx
import ComingSoon from "@/components/coming-soon";
import UserChangePasswordForm from "@/components/shared/user-change-password-form";
import UserSettings from "@/components/shared/user-settings";
import UserSignOutBtn from "@/components/shared/user-sign-out-btn";
import getDeviceType from "@/lib/getDeviceType";
import { cn } from "@/lib/utils";
import UserNotificationsHandler from "../../../../components/shared/user-notifications-handler";

const page = async () => {
  const device = await getDeviceType();
  return (
    <>
      <h1
        className={cn("text-foreground", {
          "mt-40": device === "desktop",
        })}
      >
        User Settings
      </h1>
      <UserSettings />
      <UserChangePasswordForm />
      <UserSignOutBtn />
      <UserNotificationsHandler />
      <ComingSoon message="You can add in this page your personal user settings for your project" />
    </>
  );
};

export default page;
