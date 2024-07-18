"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
const MobileUserProfileBanner = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="bg-red-500 absolute inset-x-0 top-0">
      {user?.image ? (
        <Image
          src={user.image}
          width={50}
          height={50}
          alt={user.name ?? ""}
          className="w-full h-80"
        />
      ) : (
        <div className="w-full h-80 bg-primary"></div>
      )}
    </div>
  );
};

export default MobileUserProfileBanner;
