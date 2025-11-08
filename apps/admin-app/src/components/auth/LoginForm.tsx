import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Input } from '@repo/ui/components/ui/input';
import { Label } from '@repo/ui/components/ui/label';
import { Button } from '@repo/ui/components/ui/button';
import { Avatar, AvatarFallback } from '@repo/ui/components/ui/avatar';
import { loginSchema, type LoginFormData } from '../../lib/validation/loginSchema';
import { cn } from '@repo/ui/lib/utils';

export function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const emailValue = watch('email');

  const onSubmit = async (data: LoginFormData) => {
    // TODO: Implement actual API call
    console.log('Login data:', data);
    navigate('/verify-otp');
  };

  return (
    <div className="w-full max-w-md">
      {/* User Icon */}
      <div className="mb-6 flex justify-center">
        <Avatar className="h-16 w-16 border-2 border-grey-200 bg-vintage-100">
          <AvatarFallback className="bg-vintage-100 text-vintage-700">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-vintage-700"
            >
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                fill="currentColor"
              />
              <path
                d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                fill="currentColor"
              />
            </svg>
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-center text-3xl font-playfair font-bold text-grey-900 md:text-4xl">
        Sign in
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-center text-sm font-poppins text-grey-400 md:text-base">
        Enter your details to sign in
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-poppins font-medium text-grey-900">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-grey-300" />
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              className={cn(
                'pl-10',
                errors.email && 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50'
              )}
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </div>
          {errors.email && (
            <p className="text-xs font-poppins text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid || !emailValue}
          className="w-full bg-gradient-to-r from-vintage-400 via-vintage-500 to-vintage-600 text-white hover:from-vintage-500 hover:via-vintage-600 hover:to-vintage-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Code
        </Button>
      </form>
    </div>
  );
}

