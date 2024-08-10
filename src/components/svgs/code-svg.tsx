'use client';

import { cn } from '@/lib/utils';

const CodeSvg = ({
  className,
  fill,
  background,
}: {
  className?: string;
  fill?: string;
  background?: string;
}) => {
  if (!fill) fill = 'foreground';
  if (!background) background = 'background';
  return (
    <div
      className={cn('rounded p-2 aspect-square w-10 h-10', className)}
      style={{ backgroundColor: `hsl(var(--${background}))` }}
    >
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M233.333 266.667L100 400L233.333 533.333"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M566.667 266.667L700 400L566.667 533.333"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M466.667 133.333L328.63 648.493"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CodeSvg;
