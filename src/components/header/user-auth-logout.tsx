import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const UserAuthLogout = ({ className }: { className?: string }) => {
  const HandleSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/" });
  };
  return (
    <div className={cn("", className)} onClick={HandleSignOut}>
      <span className="w-9 h-9 flex justify-center items-center">
        <LogOut className="w-4 h-4" />
      </span>
      <span>logout</span>
    </div>
  );
};

export default UserAuthLogout;
