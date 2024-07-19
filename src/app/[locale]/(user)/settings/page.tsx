// src\app\[locale]\(user)\settings\page.tsx
import ComingSoon from "@/components/coming-soon";
import UserSettings from "@/components/shared/user-settings";

const page = () => {
  return (
    <>
      <h1 className="text-foreground z-10">User Settings</h1>
      <UserSettings />
      <ComingSoon message="You can add in this page your personal user settings for your project" />
    </>
  );
};

export default page;
