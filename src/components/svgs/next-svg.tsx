'use client';
import { cn } from '@/lib/utils';

const NextSvg = ({
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
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full')}
      >
        <mask
          id="mask0_185_11"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="80"
          height="80"
        >
          <path
            d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
            fill={`hsl(var(--${fill}))`}
          />
        </mask>
        <g mask="url(#mask0_185_11)">
          <path
            d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
            fill={`hsl(var(--${fill}))`}
          />
          <path
            d="M66.448 70.0089L30.7298 24H24V55.9867H29.3838V30.8372L62.2218 73.2644C63.7036 72.2729 65.1151 71.1844 66.448 70.0089Z"
            fill="url(#paint0_linear_185_11)"
          />
          <path
            d="M56.4444 24H51.1111V56H56.4444V24Z"
            fill="url(#paint1_linear_185_11)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_185_11"
            x1="48.4444"
            y1="51.7778"
            x2="64.2222"
            y2="71.3333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`hsl(var(--${background}))`} />
            <stop
              offset="1"
              stopColor={`hsl(var(--${background}))`}
              stopOpacity="0"
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_185_11"
            x1="53.7778"
            y1="24"
            x2="53.6884"
            y2="47.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`hsl(var(--${background}))`} />
            <stop
              offset="1"
              stopColor={`hsl(var(--${background}))`}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NextSvg;
