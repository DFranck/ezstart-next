"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Section from "./section";

const UserNotificationsHandler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTestNotification = () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("EzStart Notification", {
          body: "This is a EzStart test notification",
          icon: "/icons/icon-192x192.png",
        });
      } else {
        alert("Please enable notifications to receive this alert.");
      }
    } else {
      alert("Notifications are not supported in this browser.");
    }
  };

  return (
    <Section>
      <div className="w-full lg:w-fit">
        <h3 className="mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Notification Settings
        </h3>
        <div
          className={cn(
            "transition-[max-height] duration-500 ease-in-out overflow-hidden",
            isOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="flex flex-col">
            <p>To change your notification settings, follow these steps:</p>
            <ol>
              <li>Open your device settings.</li>
              <li>Go to Apps & notifications.</li>
              <li>Select the app name.</li>
              <li>Tap on Notifications and change the settings.</li>
            </ol>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded shadow"
              onClick={handleTestNotification}
            >
              Test Notifications
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UserNotificationsHandler;
