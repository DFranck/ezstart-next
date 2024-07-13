import { cn } from "@/lib/utils";

const PaymentSvg = ({
  className,
  fill,
  background,
}: {
  className?: string;
  fill?: string;
  background?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded",
        className,
        background ? `bg-${background}` : "bg-primary"
      )}
    >
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        className={cn("w-full h-full", className)}
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="13"
          rx="2"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 10H20.5"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15H9"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PaymentSvg;
