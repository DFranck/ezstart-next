// public/sw-registration.js

export const registerServiceWorker = () => {
  console.log("Service Worker registration in progress...");

  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  }
};
registerServiceWorker();
