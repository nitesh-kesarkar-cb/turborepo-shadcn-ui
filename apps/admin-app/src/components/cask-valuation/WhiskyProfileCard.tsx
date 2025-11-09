import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { cn } from '@repo/ui/lib/utils';

interface WhiskyProfile {
  spirit: string;
  distillery: string;
  region: string;
  ays: string;
  age: number;
  abv: number;
}

interface WhiskyProfileCardProps {
  profile: WhiskyProfile;
}

const profileFields = [
  { label: 'Spirit', key: 'spirit' as keyof WhiskyProfile },
  { label: 'Distillery', key: 'distillery' as keyof WhiskyProfile },
  { label: 'Region', key: 'region' as keyof WhiskyProfile },
  { label: 'AYS', key: 'ays' as keyof WhiskyProfile },
  { label: 'Age', key: 'age' as keyof WhiskyProfile },
  { label: 'ABV', key: 'abv' as keyof WhiskyProfile },
];

export function WhiskyProfileCard({ profile }: WhiskyProfileCardProps) {
  return (
    <Card className="bg-white shadow-sm bg-vintage-primary">
      <CardHeader>
        <CardTitle className="text-h6 font-playfair font-bold text-grey-900">
          Whisky Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-grey-100">
          {profileFields.map((field, index) => {
            const value = profile[field.key];
            const displayValue =
              field.key === 'age' || field.key === 'abv'
                ? typeof value === 'number'
                  ? field.key === 'abv'
                    ? `${value}%`
                    : value.toString()
                  : value
                : value;

            return (
              <div
                key={field.key}
                className="px-2 py-3"
              >
                <div className={cn("flex items-center justify-between px-4 text-label-sm font-poppins",
                  index % 2 === 0 ? '' : 'bg-vintage-secondary rounded-lg')}>
                  <span className="text-grey-600">
                    {field.label}
                  </span>
                  <span className="text-grey-900">
                    {displayValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

