import { cn } from '@repo/ui/lib/utils';

interface StatusBadgeProps {
  status: 'Completed' | 'Pending' | 'Failed';
  className?: string;
}

const statusConfig = {
  Completed: {
    dotColor: '#1AA65B',
    bgColor: '#EBF7F0',
    textColor: '#1AA65B',
  },
  Pending: {
    dotColor: '#CFB878',
    bgColor: '#FEFBF0',
    textColor: '#B09F66',
  },
  Failed: {
    dotColor: '#F40139',
    bgColor: '#F8E8EC',
    textColor: '#F40139',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-label-sm font-poppins font-medium',
        className
      )}
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
      }}
    >
      <div
        className="h-2 w-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: config.dotColor }}
      />
      <span className="whitespace-nowrap">{status}</span>
    </div>
  );
}

