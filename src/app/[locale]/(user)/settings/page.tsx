// src\app\[locale]\(user)\settings\page.tsx
import ComingSoon from "@/components/coming-soon";
import UserSettings from "@/components/shared/user-settings";
import getDeviceType from "@/lib/getDeviceType";
import { cn } from "@/lib/utils";

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
      <ComingSoon message="You can add in this page your personal user settings for your project" />
    </>
  );
};

export default page;
