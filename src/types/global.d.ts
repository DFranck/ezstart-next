// src\types\global.d.ts

// Typical types defined here:
// - Global types or extensions of global objects
// - Specific properties added to existing objects (e.g., Window)

export {};

declare global {
  interface Window {
    // deferredPrompt is often used in Progressive Web Apps (PWA) to handle the installation event of the application.
    deferredPrompt: any;
  }
}
