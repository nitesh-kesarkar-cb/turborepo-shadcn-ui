import { cn } from '@repo/ui/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Barrel icon - using a simple SVG representation */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect
          x="4"
          y="8"
          width="24"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="8"
          y1="12"
          x2="24"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="8"
          y1="16"
          x2="24"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="8"
          y1="20"
          x2="24"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="16"
          y1="8"
          x2="16"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-playfair font-bold text-grey-900 leading-tight">
          VINTAGE
        </span>
        <span className="text-sm font-poppins font-normal text-grey-900 leading-tight -mt-0.5">
          ACQUISITIONS
        </span>
      </div>
    </div>
  );
}

