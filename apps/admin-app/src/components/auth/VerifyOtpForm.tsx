import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@repo/ui/components/ui/input-otp';
import { Button } from '@repo/ui/components/ui/button';
import { otpSchema, type OtpFormData } from '../../lib/validation/otpSchema';
import { cn } from '@repo/ui/lib/utils';

const RESEND_COOLDOWN_SECONDS = 30;

export function VerifyOtpForm() {
  const navigate = useNavigate();
  const [resendCooldown, setResendCooldown] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<OtpFormData>({
    resolver: yupResolver(otpSchema),
    mode: 'onChange',
    defaultValues: {
      otp: '',
    },
  });

  const otpValue = watch('otp');

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const onSubmit = async (data: OtpFormData) => {
    // TODO: Implement actual API call
    console.log('OTP verification data:', data);
    navigate('/dashboard');
  };

  const handleResendOtp = () => {
    if (resendCooldown > 0) return;
    // TODO: Implement actual resend API call
    console.log('Resending OTP...');
    setResendCooldown(RESEND_COOLDOWN_SECONDS);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-md">
      {/* Lock Icon */}
      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-grey-200 bg-vintage-100">
          <Lock className="h-8 w-8 text-vintage-700" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-center text-3xl font-playfair font-bold text-grey-900 md:text-4xl">
        Verification
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-center text-sm font-poppins text-grey-400 md:text-base">
        A verification code has been sent to your email. Please enter the exact code here
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Input */}
        <div className="space-y-2">
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col items-center">
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    // Handle paste
                    if (value.length === 6 && /^\d+$/.test(value)) {
                      setValue('otp', value, { shouldValidate: true });
                    }
                  }}
                  className={cn(
                    errors.otp && 'has-[input]:border-red-500'
                  )}
                >
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className={cn(
                          'h-12 w-12 text-lg',
                          errors.otp && 'border-red-500'
                        )}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                {errors.otp && (
                  <p className="mt-2 text-xs font-poppins text-red-500" role="alert">
                    {errors.otp.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid || otpValue?.length !== 6}
          className="w-full bg-gradient-to-r from-vintage-400 via-vintage-500 to-vintage-600 text-white hover:from-vintage-500 hover:via-vintage-600 hover:to-vintage-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verify
        </Button>

        {/* Resend OTP Link */}
        <div className="text-center">
          <span className="text-sm font-poppins text-grey-400">
            Didn't get OTP? -{' '}
          </span>
          {resendCooldown > 0 ? (
            <span className="text-sm font-poppins text-vintage-600">
              resend OTP in {formatTime(resendCooldown)}
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className="text-sm font-poppins text-vintage-600 hover:text-vintage-700 underline"
            >
              resend OTP
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

