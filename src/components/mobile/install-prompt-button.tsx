// src/components/install-prompt-button.tsx

'use client';

import { useEffect, useState } from 'react';
import InstallPromptDialog from './install-prompt-dialog';

export default function InstallPromptButton() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      console.log('handleBeforeInstallPrompt triggered on InstallPromptButton');
      // Empêcher l'affichage automatique de la bannière
      event.preventDefault();
      // Stocker l'événement pour pouvoir l'utiliser plus tard
      window.deferredPrompt = event;

      console.log('beforeinstallprompt event captured: ', event);

      // Afficher la boîte de dialogue personnalisée si l'utilisateur n'a pas déjà refusé
      const installDeclined = localStorage.getItem('installDeclined');
      console.log('installDeclined: ', installDeclined);
      if (!installDeclined) {
        setShowDialog(true);
        console.log('Showing install prompt dialog');
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleAccept = async () => {
    console.log('User accepted the install prompt');
    // Afficher la bannière d'installation
    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    console.log('User choice outcome: ', outcome);
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // Réinitialiser l'événement
    window.deferredPrompt = null;
    setShowDialog(false);
  };

  const handleDecline = () => {
    console.log('User declined the install prompt');
    localStorage.setItem('installDeclined', 'true');
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && (
        <InstallPromptDialog
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}
    </>
  );
}
