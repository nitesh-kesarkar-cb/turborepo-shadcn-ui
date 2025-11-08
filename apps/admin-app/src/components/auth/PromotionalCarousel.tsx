import { useState, useEffect } from 'react';
import { cn } from '@repo/ui/lib/utils';

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface PromotionalCarouselProps {
  items: CarouselItem[];
  autoRotateInterval?: number;
  className?: string;
}

export function PromotionalCarousel({
  items,
  autoRotateInterval = 5000,
  className,
}: PromotionalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [items.length, autoRotateInterval]);

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentItem.image})` }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-grey-900/60 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-playfair font-bold text-white md:text-4xl lg:text-5xl">
            {currentItem.title}
          </h2>
          <p className="text-base font-poppins text-white/90 md:text-lg">
            {currentItem.description}
          </p>
        </div>

        {/* Pagination Dots */}
        {items.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'bg-white/50 hover:bg-white/75'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

