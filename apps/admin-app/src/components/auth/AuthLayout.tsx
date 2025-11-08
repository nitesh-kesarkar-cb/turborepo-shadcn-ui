import type { ReactNode } from 'react';
import { Logo } from './Logo';
import { PromotionalCarousel, type CarouselItem } from './PromotionalCarousel';
import { cn } from '@repo/ui/lib/utils';

interface AuthLayoutProps {
  children: ReactNode;
  carouselItems: CarouselItem[];
  className?: string;
}

export function AuthLayout({
  children,
  carouselItems,
  className,
}: AuthLayoutProps) {
  return (
    <div className={cn('flex min-h-screen flex-col md:flex-row', className)}>
      {/* Left Column - Form Section */}
      <div className="flex min-h-screen w-full flex-col bg-grey-0 p-6 md:w-[45%] md:p-8 lg:p-12">
        {/* Logo */}
        <Logo className="mb-8 md:mb-12" />

        {/* Form Content - Centered */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {children}
        </div>

        {/* Footer Copyright */}
        <p className="mt-auto text-xs font-poppins text-grey-400 md:text-sm">
          © 2025 Vintage Acquisitions
        </p>
      </div>

      {/* Right Column - Promotional Carousel - Hidden on mobile */}
      <div className="hidden min-h-screen w-full md:block md:w-[55%]">
        <PromotionalCarousel items={carouselItems} />
      </div>
    </div>
  );
}

