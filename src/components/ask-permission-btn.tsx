"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
const AskPermissionBtn = () => {
  const [permission, setPermission] = useState(() => {
    // Vérifie si la permission est déjà stockée dans localStorage
    console.log("Permission:", localStorage.getItem("notification-permission"));

    if (typeof window !== "undefined") {
      return localStorage.getItem("notification-permission") || "default";
    }
    return "default";
  });
  useEffect(() => {
    // Stocke la permission dans localStorage chaque fois qu'elle change
    if (typeof window !== "undefined") {
      localStorage.setItem("notification-permission", permission);
    }

    // Vérifie l'état de la permission actuelle
    if (typeof window !== "undefined" && "Notification" in window) {
      const currentPermission = Notification.permission;
      setPermission(currentPermission);
    }
  }, []);

  console.log(permission);

  const handlePermission = async () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      try {
        const permissionResult = await Notification.requestPermission();
        setPermission(permissionResult);
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    }
  };

  if (permission === "default") {
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
