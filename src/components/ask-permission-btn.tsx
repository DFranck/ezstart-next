'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const AskPermissionBtn = () => {
  const [permission, setPermission] = useState('default');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      const storedPermission = localStorage.getItem('notification-permission');
      if (storedPermission) {
        setPermission(storedPermission);
      } else {
        setPermission(Notification.permission);
      }
    }

    const checkPermission = () => {
      if (typeof window !== 'undefined' && 'Notification' in window) {
        setPermission(Notification.permission);
      }
    };

    // Vérifier la permission de notification à l'initialisation
    checkPermission();

    // Surveiller les changements de permission (nécessite un rafraîchissement de la page)
    document.addEventListener('visibilitychange', checkPermission);
    return () => {
      document.removeEventListener('visibilitychange', checkPermission);
    };
  }, []);

  const handlePermission = async () => {
    console.log('Requesting permission...');

    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const permissionResult = await Notification.requestPermission();
        console.log('Permission result: ', permissionResult);
        setPermission(permissionResult);
        localStorage.setItem('notification-permission', permissionResult);
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    }
  };

  if (permission === 'default') {
    return (
      <Button
        className="fixed bottom-20 right-6 border shadow text-lg px-8 py-6 font-bold"
        onClick={handlePermission}
      >
        Allow Notifications
      </Button>
    );
  }

  return null;
};

export default AskPermissionBtn;
