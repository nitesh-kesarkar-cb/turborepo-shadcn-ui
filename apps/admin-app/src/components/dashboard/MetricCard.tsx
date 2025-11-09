import { ArrowRight } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  value: string | number;
  label: string;
  onViewDetails?: () => void;
}

const MetricCard = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  value,
  label,
  onViewDetails
}: MetricCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 flex flex-col">
      <div className="flex items-start gap-4 mb-6 p-6 ">
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg", iconBgColor)}>
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>

        <div>
          <div className="text-h5 font-poppins font-semibold text-grey-900">{value}</div>
          <div className="text-label-sm font-playfair text-grey-800">{label}</div>
        </div>
      </div>

      <div className="flex justify-start w-full bg-grey-50 py-2 px-6">
        <Button
          onClick={onViewDetails}
          className=" gap-2 rounded-md text-label-sm font-poppins text-grey-600 hover:bg-grey-100 bg-white"
        >
          View details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default MetricCard;