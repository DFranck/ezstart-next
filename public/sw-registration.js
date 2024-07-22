// public/sw-registration.js

document.addEventListener("DOMContentLoaded", () => {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );

        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            const applicationServerKey = urlB64ToUint8Array(
              "<VOTRE_APPLICATION_SERVER_KEY>"
            );
            registration.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey,
              })
              .then((subscription) => {
                console.log("User is subscribed:", subscription);
                // Envoyer l'abonnement au serveur pour sauvegarder l'abonnement
              })
              .catch((error) => {
                console.error("Failed to subscribe the user:", error);
              });
          }
        });
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  }
});

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
