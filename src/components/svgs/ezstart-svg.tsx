"use client";
import { cn } from "@/lib/utils";

const EzStartSvg = ({
  className,
  fill,
  background,
}: {
  className?: string;
  fill?: string;
  background?: string;
}) => {
  if (!fill) fill = "";
  if (!background) background = "background";
  return (
    <div
      className={cn("rounded p-2 aspect-square w-10 h-10", className)}
      style={{ backgroundColor: `hsl(var(--${background}))` }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="32" height="32" rx="2" fill="transparent" />
        <path
          d="M2.03567 30L2 25.52L20.2624 6.48H2V2H29.9643V5.51367L11.7197 25.52H30V30H2.03567Z"
          fill={fill ? `hsl(var(--${fill}))` : "#7C3AED"}
        />
        <path
          d="M14.9999 6.47998L29.9999 16L14.9999 25.52V6.47998Z"
          fill={fill ? `hsl(var(--${fill}))` : "black"}
        />
        <path
          d="M2 25.52L2 6.48002L13.9653 6.48002L13.9653 9.79911L5.75434 9.79911L5.75434 14.3359L13.3497 14.3359L13.3497 17.6549L5.75434 17.6549L5.75434 22.201L14 22.201L14 25.52L2 25.52Z"
          fill={fill ? `hsl(var(--${fill}))` : "black"}
        />
        <rect
          x="17.4574"
          y="10"
          width="11.2654"
          height="0.91473"
          rx="0.457365"
          transform="rotate(30 17.4574 10)"
          fill={"white"}
        />
      </svg>
    </div>
  );
};

export default EzStartSvg;
