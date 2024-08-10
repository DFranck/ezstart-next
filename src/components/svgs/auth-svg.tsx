'use client';
import { cn } from '@/lib/utils';

const AuthSvg = ({
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
        viewBox="0 0 738 823"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full')}
      >
        <path
          d="M0 110.3L368.426 0V396.854L105.752 600.398C24.185 426.586 1.90515 318.897 0 110.3Z"
          fill={fill ? `hsl(var(--${fill}))` : 'url(#paint0_linear_189_8)'}
        />
        <path
          d="M737.986 118.261L368.423 2.27507V397.315L737.986 118.261Z"
          fill={fill ? `hsl(var(--${fill}))` : 'url(#paint1_linear_189_8)'}
        />
        <path
          d="M368.431 396.854L737.995 118.26C727.977 518.406 595.855 753.909 367.294 822.136L368.431 396.854Z"
          fill={fill ? `hsl(var(--${fill}))` : 'url(#paint2_linear_189_8)'}
        />
        <path
          d="M368.428 821C265.518 784.582 207.942 745.113 105.754 598.125L369.565 395.718L368.428 821Z"
          fill={fill ? `hsl(var(--${fill}))` : 'url(#paint3_linear_189_8)'}
        />
        <circle
          cx="368.426"
          cy="368.426"
          r="168.293"
          fill={`hsl(var(--${background}))`}
        />
        <path
          d="M400.261 327.491C400.261 339.775 397.309 351.369 392.077 361.604C419.592 388.895 443.471 412.775 468.488 440.065C468.488 459.396 468.488 455.985 468.488 471.905C461.665 471.905 434.374 471.905 408.22 471.905C408.22 457.122 408.22 455.985 408.22 443.477C400.261 443.477 396.849 443.477 383.204 443.477C383.204 432.105 383.204 428.694 383.204 417.323C372.97 417.323 369.558 417.323 360.462 417.323C351.365 410.5 347.953 408.226 339.993 401.085C335.214 402.04 330.271 402.54 325.211 402.54C283.762 402.54 250.161 368.94 250.161 327.491C250.161 286.042 283.762 252.441 325.211 252.441C366.66 252.441 400.261 286.042 400.261 327.491Z"
          fill="url(#paint4_linear_189_8)"
        />
        <circle cx="304" cy="303" r="14" fill={`hsl(var(--${background}))`} />
        <defs>
          <linearGradient
            id="paint0_linear_189_8"
            x1="0"
            y1="151"
            x2="368"
            y2="151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#39EAB8" />
            <stop offset="1" stopColor="#20ACF0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_189_8"
            x1="368.423"
            y1="199.795"
            x2="737.986"
            y2="199.795"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1CB3E6" />
            <stop offset="1" stopColor="#21ABF2" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_189_8"
            x1="367.294"
            y1="655.548"
            x2="781.5"
            y2="655.548"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A623D9" />
            <stop offset="1" stopColor="#9559DF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_189_8"
            x1="105.754"
            y1="608.359"
            x2="369.565"
            y2="608.359"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DE66EB" />
            <stop offset="1" stopColor="#B628E3" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_189_8"
            x1="268.5"
            y1="270.5"
            x2="468.488"
            y2="471.336"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={fill ? `hsl(var(--${fill}))` : '#F95C04'} />
            <stop
              offset="0.69"
              stopColor={fill ? `hsl(var(--${fill}))` : '#FEAF02'}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AuthSvg;
