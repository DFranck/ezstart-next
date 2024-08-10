// src/app/[locale]/(user)/settings/page.tsx
import ComingSoon from '@/components/coming-soon';
import InstallButton from '@/components/install-button';
import UserChangePasswordForm from '@/components/shared/user-change-password-form';
import UserNotificationsHandler from '@/components/shared/user-notifications-handler';
import UserSignOutBtn from '@/components/shared/user-sign-out-btn';
import LocaleSwitcher from '@/features/internationalization/locale-switcher';
import { ThemeSwitcher } from '@/features/theme/theme-switcher';
import getDeviceType from '@/lib/getDeviceType';
import { cn } from '@/lib/utils';

const Page = async () => {
  const device = await getDeviceType();
  const liStyle = 'flex justify-between items-center p-4';
  const h2Style = 'my-0 h-16 flex items-center';
  return (
    <div className="container mx-auto p-4 ">
      <div
        className="bg-primary fixed inset-x-0 top-0 w-full h-1/3 text-primary-foreground flex justify-between p-5 cursor-pointer -z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 100%)' }}
      ></div>
      <h1
        className={cn(
          'text-4xl font-bold text-center text-foreground mb-10 mt-20',
          {
            'mt-40': device === 'desktop',
          },
        )}
      >
        User Settings
      </h1>
      <ul className="grid grid-cols-1 max-w-xl mx-auto">
        <li className={liStyle}>
          <h2 className={h2Style}>Language</h2>{' '}
          <LocaleSwitcher
            className="w-16 h-16 p-2 border-none"
            menuPosition={20}
          />
        </li>
        <li className={liStyle}>
          <h2 className={h2Style}>Theme</h2>{' '}
          <ThemeSwitcher
            className="w-16 h-16 p-2 border-none"
            menuPosition={20}
          />
        </li>
        <li className={liStyle}>
          <UserChangePasswordForm />
        </li>
        <li className={liStyle}>
          <UserNotificationsHandler />
        </li>
        <li className={liStyle}>
          <InstallButton />
        </li>
        <li className={liStyle}>
          <UserSignOutBtn />
        </li>
      </ul>
      <div className="flex flex-col items-center space-y-6">
        <ComingSoon message="You can add in this page your personal user settings for your project" />
      </div>
    </div>
  );
};

export default Page;
