"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Section from "../layout/section";
import { Button } from "../ui/button";
const UserProfileInfos = ({ className }: { className?: string }) => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <>
      <Section className={cn("flex px-0")}>
        <div className="flex">
          <Avatar className="w-full bg-red-500 rounded-t-full p-2">
            {user?.image ? (
              <Image
                src={user.image}
                width={50}
                height={50}
                alt={user.name ?? ""}
                className="rounded-full"
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
      </Section>
      <>
        {user?.name ? (
          <h1 className="">{user?.name}</h1>
        ) : (
          <>
            <h1>Hello</h1>
            <Button variant={"outline"}>what's your name?</Button>
          </>
        )}
      </>
    </>
  );
};

export default UserProfileInfos;
