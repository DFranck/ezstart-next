// src/components/shared/user-notifications-handler.tsx
'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '../ui/button';

const UserNotificationsHandler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTestNotification = () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      console.log('Notification.permission: ', Notification.permission);
      if (Notification.permission === 'granted') {
        new Notification('EzStart Notification', {
          body: 'This is a EzStart test notification',
          icon: '/icons/icon-192x192.png',
        });
        console.log('Notification sent', Notification);
      } else {
        alert('Please enable notifications to receive this alert.');
      }
    } else {
      alert('Notifications are not supported in this browser.');
    }
  };

  return (
    <div className="w-full">
      <h2
        className="text-start flex items-center my-0 h-16 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Notification Settings
      </h2>
      <div
        className={cn(
          'transition-[max-height] duration-500 ease-in-out overflow-hidden mx-2',
          isOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        <div className="flex flex-col space-y-4">
          <p>To change your notification settings, follow these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open your device settings.</li>
            <li>Go to Apps & notifications.</li>
            <li>Select the app name.</li>
            <li>Tap on Notifications and change the settings.</li>
          </ol>
          <Button
            className="h-16 w-full border shadow"
            size={'lg'}
            onClick={handleTestNotification}
          >
            <h3 className="my-0">Test Notifications</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserNotificationsHandler;
