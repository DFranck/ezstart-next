'use client';

import { cn } from '@/lib/utils';

const PrismaSvg = ({
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
        viewBox="0 0 469 374"
        fill="none"
        className={cn('w-full h-full')}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M110.597 25.9078H359.903L432.957 102.177L226.255 333.692L34.0214 102.177L110.597 25.9078Z"
          fill={fill ? `hsl(var(--${fill})/0.6)` : '#18253F'}
        />
        <path
          d="M276.36 279.009H178.646L134.513 224.98L259.577 224.976L259.581 217.312H331.069L276.36 279.009Z"
          fill={fill ? `hsl(var(--${fill}))` : '#274D82'}
        />
        <path
          d="M411.978 80.4246L142.359 236.089L107.187 192.089L315.919 71.5746L312.085 64.9316L367.681 32.8329L411.978 80.4246Z"
          fill={fill ? `hsl(var(--${fill}))` : '#274D82'}
        />
        <path
          d="M267.523 25.9851L65.0719 142.87L33.5863 103.565L169.134 25.3058L267.523 25.9851Z"
          fill={fill ? `hsl(var(--${fill}))` : '#274D82'}
        />
        <g filter="url(#filter0_d_140_43)">
          <path
            d="M369.648 3H101.112L3 100.607L225.747 368.839L243.517 348.901L464.007 101.523L369.648 3ZM359.838 25.9809L432.721 102.084L226.364 333.608L34.0993 102.084L110.595 25.9809H359.838Z"
            fill={fill ? `hsl(var(--${fill}))` : '#000'}
          />
        </g>
        <path
          d="M369.648 3H101.112L3 100.607L225.747 368.839L243.517 348.901L464.007 101.523L369.648 3ZM359.838 25.9809L432.72 102.084L226.364 333.608L34.0993 102.084L110.595 25.9809H359.838Z"
          fill={fill ? `hsl(var(--${fill}))` : '#3068B7'}
        />
        <defs>
          <filter
            id="filter0_d_140_43"
            x="0"
            y="0"
            width="469.007"
            height="373.839"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_140_43"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_140_43"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PrismaSvg;
