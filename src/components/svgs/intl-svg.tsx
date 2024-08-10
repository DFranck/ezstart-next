import { cn } from '@/lib/utils';

const NextIntl = ({
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
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full')}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200.5 9.5C253.105 9.5 300.73 30.8224 335.204 65.2962C369.678 99.7699 391 147.395 391 200C391 240.636 378.279 278.301 356.597 309.227C349.309 319.621 341.01 329.255 331.842 337.984C327.63 341.995 323.234 345.816 318.668 349.431C286.194 375.147 245.14 390.5 200.5 390.5C147.895 390.5 100.27 369.178 65.7962 334.704C31.3224 300.23 10 252.605 10 200C10 147.395 31.3224 99.7699 65.7962 65.2962C100.27 30.8224 147.895 9.5 200.5 9.5Z"
          stroke={fill ? `hsl(var(--${fill}))` : '#5FC3E7'}
          strokeWidth="18"
        />
        <path
          d="M366 314H324V346H366V314Z"
          fill={`hsl(var(--${background}))`}
        />
        <path
          d="M329.7 349C334.671 349 338.7 344.971 338.7 340C338.7 335.029 334.671 331 329.7 331C324.73 331 320.7 335.029 320.7 340C320.7 344.971 324.73 349 329.7 349Z"
          fill={fill ? `hsl(var(--${fill}))` : '#5FC3E7'}
        />
        <path
          d="M40.5 105.5L354 106"
          stroke={fill ? `hsl(var(--${fill}))` : '#5FC3E7'}
          strokeWidth="18"
          strokeLinecap="square"
        />
        <path
          d="M202.5 390.5C254.139 390.5 296 305.21 296 200C296 94.7898 254.139 9.5 202.5 9.5C150.861 9.5 109 94.7898 109 200C109 305.21 150.861 390.5 202.5 390.5Z"
          stroke={fill ? `hsl(var(--${fill}))` : '#5FC3E7'}
          strokeWidth="18"
        />
        <path
          d="M50 305H354"
          stroke={fill ? `hsl(var(--${fill}))` : '#5FC3E7'}
          strokeWidth="18"
          strokeLinecap="square"
        />
        <path
          d="M9.5 206.5H389.5"
          stroke={fill ? `hsl(var(--${fill}))` : '#5FC3E7'}
          strokeWidth="18"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default NextIntl;
