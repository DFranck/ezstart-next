// src/components/install-button.tsx
'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  prompt(): Promise<void>;
}

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    // Check if the app is installed
    const checkInstallation = () => {
      const isStandalone =
        (window.matchMedia &&
          window.matchMedia('(display-mode: standalone)').matches) ||
        (window.navigator as any).standalone;

      setIsInstalled(isStandalone);
      console.log('isStandalone: ', isStandalone);
    };

    checkInstallation();

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      // Empêcher l'affichage automatique de la bannière
      event.preventDefault();
      // Stocker l'événement pour pouvoir l'utiliser plus tard
      setDeferredPrompt(event);
      console.log('beforeinstallprompt event captured: ', event);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt as EventListener,
    );

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      console.log('App installed');
    });
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      setIsFirefox(true);
    }
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt as EventListener,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      console.log('Prompting install...');
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('User choice outcome: ', outcome);
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    }
  };

  if (isInstalled) {
    return null;
  }

  if (isFirefox) {
    return (
      <div className="install-instructions">
        <h2 className="text-start flex items-center my-0 h-16">Install App</h2>
        <ul className="list-disc list-inside">
          <li>Open the browser menu.</li>
          <li>Select Add to Home screen.</li>
          <li>Follow the prompts to install the app.</li>
        </ul>
      </div>
    );
  }

  if (!deferredPrompt) {
    return null;
  }

  return (
    <Button className="h-16 w-full" size={'lg'} onClick={handleInstallClick}>
      <h2 className="text-start flex items-center my-0 h-16">Install App</h2>
    </Button>
  );
};

export default InstallButton;
