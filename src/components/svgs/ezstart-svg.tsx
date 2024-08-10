'use client';
import { cn } from '@/lib/utils';

const EzStartSvg = ({
  className,
  fill,
  background,
}: {
  className?: string;
  fill?: string;
  background?: string;
}) => {
  if (!fill) fill = '';
  if (!background) background = 'background';
  return (
    <div
      className={cn('rounded p-2 aspect-square w-10 h-10', className)}
      style={{ backgroundColor: `hsl(var(--${background}))` }}
    >
      <svg
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="17" cy="17" r="17" fill="url(#paint0_linear_100_80)" />
        <path
          d="M30.2307 16.4994C30.8974 16.8843 30.8974 17.8465 30.2307 18.2314L10.1826 29.8062C9.51597 30.1911 8.68264 29.7099 8.68264 28.9401L8.68264 5.79062C8.68264 5.02082 9.51597 4.5397 10.1826 4.9246L30.2307 16.4994Z"
          fill={
            background && background !== 'transparent'
              ? `hsl(var(--${background}))`
              : 'black'
          }
        />
        <path
          d="M19.6921 23.1923V20.6923L22.6921 15.6923L19.6921 14.1923V11.6923L24.6921 14.6923V15.6923L22.6921 19.1923L28.1921 16.1923C28.1921 16.1923 28.8016 16.497 29.1921 16.6923C30.1921 17.1923 29.1921 17.6454 29.1921 17.6454L19.6921 23.1923Z"
          fill={fill ? `hsl(var(--${fill}))` : '#7C3AED'}
        />
        <path
          d="M19.6921 11.6923L19.6921 14.1923L13.6315 10.6923L13.6315 15.1629L15.6921 15.1923L15.6921 18.7707L13.6315 18.7707L13.6315 23.6923L19.6921 20.6923L19.6921 23.1923C19.6921 23.1923 13.2058 26.637 11.6921 27.6923C10.1785 28.7475 9.69214 28.1923 9.69214 26.6923L9.69214 7.69226L9.69214 6.69226C9.69214 6.4032 9.9383 6.19558 10.1921 6.19226C10.5186 6.18798 10.6989 6.29618 11.3114 6.66381L11.3588 6.69226L19.6921 11.6923Z"
          fill={fill ? `hsl(var(--${fill}))` : '#D9D9D9'}
        />
        <defs>
          <linearGradient
            id="paint0_linear_100_80"
            x1="17"
            y1="0"
            x2="17"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9F9F9F" />
            <stop offset="1" stopColor="#393939" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default EzStartSvg;
