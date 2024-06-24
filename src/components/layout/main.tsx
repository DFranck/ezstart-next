import { cn } from "@/lib/utils";
import React from "react";

const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        className,
        "flex flex-col flex-grow items-center justify-center"
      )}
    >
      {children}
    </main>
  );
};

export default Main;
