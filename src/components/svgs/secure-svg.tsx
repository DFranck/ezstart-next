'use client';

import { cn } from '@/lib/utils';

const SecureSvg = ({
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
        viewBox="5 5 55 55"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="3"
        stroke={fill ? `hsl(var(--${fill}))` : `hsl(var(--primary-foreground))`}
        fill="none"
        className="w-full h-full"
      >
        <path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z" />
        <polyline points="22.01 33.5 29.44 39.12 42.56 20.69" />
      </svg>
    </div>
  );
};

export default SecureSvg;
