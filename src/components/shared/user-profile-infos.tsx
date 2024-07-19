"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Section from "./section";
import UserProfileBanner from "./user-profile-banner";

const UserProfileInfos = ({
  className,
  device,
}: {
  className?: string;
  device: string;
}) => {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = session?.user;
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  });

  const handleSave = () => {
    console.log("SAVE");
  };

  return (
    <>
      <UserProfileBanner
        device={device}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleSave={handleSave}
      />
      <Section
        className={cn("flex flex-col items-center pt-0 px-0", className)}
      >
        <div className="flex mb-4 relative">
          <Avatar className="w-32 h-32 ">
            {user?.image ? (
              <Image
                src={user.image}
                width={128}
                height={128}
                alt={user.name ?? ""}
                className="rounded-full w-full h-full"
              />
            ) : (
              <Avatar>
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  className="rounded-full"
                />
              </Avatar>
            )}
          </Avatar>
        </div>
        <Input
          value={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
          readOnly={!isEditing}
          className={cn("text-3xl text-foreground mb-2 text-center", {
            "border-none bg-transparent cursor-default": !isEditing,
          })}
          style={{ pointerEvents: isEditing ? "auto" : "none" }}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!isEditing}
          className={cn("w-full text-lg  text-center text-foreground mb-4", {
            "border-none bg-transparent cursor-default": !isEditing,
          })}
          style={{ pointerEvents: isEditing ? "auto" : "none" }}
        />
        {device === "desktop" && (
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={() => {
              setIsEditing(!isEditing);
              isEditing && handleSave();
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
        )}
      </Section>
    </>
  );
};

export default UserProfileInfos;
