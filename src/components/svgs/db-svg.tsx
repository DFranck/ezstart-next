'use client';

import { cn } from '@/lib/utils';

const DbSvg = ({
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
        viewBox="2 2 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="1"
        />
        <path
          d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="1"
        />
        <path
          d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default DbSvg;
