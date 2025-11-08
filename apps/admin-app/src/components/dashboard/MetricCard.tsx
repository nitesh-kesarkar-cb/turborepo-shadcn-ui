import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  value: string | number;
  label: string;
  onViewDetails?: () => void;
}

export function MetricCard({
  icon: Icon,
  iconBgColor,
  value,
  label,
  onViewDetails,
}: MetricCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-lg',
              iconBgColor
            )}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-h2 font-playfair font-bold text-grey-900">
            {value}
          </span>
          <span className="text-label-md font-poppins text-grey-600">{label}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onViewDetails}
          className="w-fit gap-2 text-label-sm font-poppins text-grey-600 hover:bg-grey-50"
        >
          View details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

