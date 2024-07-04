"use client";

import { cn } from "@/lib/utils";

const Burger = ({
  setIsOpen,
  isOpen,
  className,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  className?: string;
}) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cn(
        "lg:hidden [&_button:hover]:opacity-100 [&_button]:opacity-60 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 p-2 focus-visible:ring-offset-0",
        className
      )}
      onClick={handleClick}
    >
      <button className="relative w-6 h-6 focus:outline-none">
        <span
          className={cn(
            "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
            isOpen ? "rotate-45 top-2.5" : "rotate-0 top-1"
          )}
        />
        <span
          className={cn(
            "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
            isOpen ? "opacity-0" : "opacity-100 top-2.5"
          )}
        />
        <span
          className={cn(
            "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
            isOpen ? "-rotate-45 top-2.5" : "rotate-0 top-4"
          )}
        />
      </button>
    </div>
  );
};

export default Burger;
