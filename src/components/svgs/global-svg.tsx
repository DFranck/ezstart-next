'use client';

import { cn } from '@/lib/utils';

const GlobalSvg = ({
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
        className={'w-full h-full'}
      >
        <path
          d="M400 733.333C584.093 733.333 733.333 584.093 733.333 400C733.333 215.905 584.093 66.6666 400 66.6666C215.905 66.6666 66.6667 215.905 66.6667 400C66.6667 584.093 215.905 733.333 400 733.333Z"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M266.666 100H299.999C234.999 294.667 234.999 505.333 299.999 700H266.666"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M500 100C565 294.667 565 505.333 500 700"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 533.333V500C294.667 565 505.333 565 700 500V533.333"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 300.003C294.667 235.003 505.333 235.003 700 300.003"
          stroke={
            fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`
          }
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default GlobalSvg;
