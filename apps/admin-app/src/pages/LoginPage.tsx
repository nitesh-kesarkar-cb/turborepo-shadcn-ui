import { AuthLayout } from '../components/auth/AuthLayout';
import { LoginForm } from '../components/auth/LoginForm';
import type { CarouselItem } from '../components/auth/PromotionalCarousel';

const loginCarouselItems: CarouselItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
    title: 'Start Your Journey with Vintage Acquisitions',
    description:
      'Vintage Acquisitions specialises in Scotch Cask Whisky investment offering opportunities to invest in premium Single Cask Scotch Whisky an alternative asset known for its timeless value and high demand.',
  },
  {
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
    title: '1Start Your Journey with Vintage Acquisitions',
    description:
      '1Vintage Acquisitions specialises in Scotch Cask Whisky investment offering opportunities to invest in premium Single Cask Scotch Whisky an alternative asset known for its timeless value and high demand.',
  },
];

export function LoginPage() {
  return (
    <AuthLayout carouselItems={loginCarouselItems}>
      <LoginForm />
    </AuthLayout>
  );
}

