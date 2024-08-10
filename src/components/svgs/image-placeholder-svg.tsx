import { cn } from '@/lib/utils';

const ImagePlaceholderSvg = ({
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
        viewBox="0 0 333 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          width="333"
          height="253"
          rx="16"
          fill={fill ? `hsl(var(--${fill})/0.4)` : '#4E4E4E'}
        />
        <rect
          x="12"
          y="9"
          width="309"
          height="235"
          rx="16"
          fill={fill ? `hsl(var(--${fill})/0.4)` : '#F1EFE2'}
        />
        <path
          d="M88 111C101.255 111 112 100.255 112 87C112 73.7452 101.255 63 88 63V111Z"
          fill={fill ? `hsl(var(--${fill}))` : '#D6A548'}
        />
        <path
          d="M64 87C64 100.255 74.7452 111 88 111V63C74.7452 63 64 73.7452 64 87Z"
          fill={fill ? `hsl(var(--${fill}))` : '#F5BC51'}
        />
        <path
          d="M166 9H305C313.837 9 321 16.1634 321 25V228C321 236.837 313.837 244 305 244H166V9Z"
          fill={fill ? `hsl(var(--${fill})/0.6)` : '#DFDDD0'}
        />
        <path
          d="M102.836 155.008C93.3113 163.052 12.1003 226.905 12.1003 226.905C12.1003 226.905 9.59375 244 29.6458 244H166V202C166 202 135.42 165.566 126.397 155.008C117.374 144.449 112.361 146.963 102.836 155.008Z"
          fill={fill ? `hsl(var(--${fill}))` : '#4DA2A5'}
        />
        <path
          d="M166 202V244.004H293H307C316.5 243 321 234.5 321 228.5V212.5C305 182.5 274 132.504 267 120.004C260 107.504 244 108.504 235 120.004C226 131.504 166 202 166 202Z"
          fill={fill ? `hsl(var(--${fill}))` : '#3D8385'}
        />
      </svg>
    </div>
  );
};

export default ImagePlaceholderSvg;
