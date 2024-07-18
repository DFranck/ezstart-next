// src/components/InstallPromptButton.tsx
"use client";

import { useEffect } from "react";

export default function InstallPromptButton() {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Empêcher l'affichage automatique de la bannière
      event.preventDefault();
      // Stocker l'événement pour pouvoir l'utiliser plus tard
      window.deferredPrompt = event;
      // Afficher votre propre bouton pour déclencher l'installation
      const installButton = document.getElementById("install-button");
      if (installButton) {
        installButton.style.display = "block";
        installButton.addEventListener("click", async () => {
          // Afficher la bannière d'installation
          window.deferredPrompt.prompt();
          const { outcome } = await window.deferredPrompt.userChoice;
          if (outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          // Réinitialiser l'événement
          window.deferredPrompt = null;
        });
      }
    });
  }, []);

  return (
    <button id="install-button" style={{ display: "none" }}>
      Télécharger l'application
    </button>
  );
}
