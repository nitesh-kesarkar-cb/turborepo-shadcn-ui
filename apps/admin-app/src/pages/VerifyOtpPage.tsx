import { AuthLayout } from '../components/auth/AuthLayout';
import { VerifyOtpForm } from '../components/auth/VerifyOtpForm';
import type { CarouselItem } from '../components/auth/PromotionalCarousel';

const verifyOtpCarouselItems: CarouselItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80',
    title: 'Whisky Cask Ownership, our steps to success',
    description:
      'We take the time to understand your reasons and requirements for investing in cask whisky and only then do we make calculated recommendations from a position of knowledge.',
  },
  {
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
    title: 'Professional Whisky Experts',
    description:
      "Whether you're a market newcomer, whisky enthusiast or a seasoned investor, we can add value to your end goal and make the journey there, smooth and successful.",
  },
];

export function VerifyOtpPage() {
  return (
    <AuthLayout carouselItems={verifyOtpCarouselItems}>
      <VerifyOtpForm />
    </AuthLayout>
  );
}

