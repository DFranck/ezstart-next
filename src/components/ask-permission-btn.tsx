"use client";

import { useState } from "react";
import { Button } from "./ui/button";
const AskPermissionBtn = () => {
  const [permission, setPermission] = useState("default");
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
