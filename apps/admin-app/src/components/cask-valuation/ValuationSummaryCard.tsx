import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { cn } from '@repo/ui/lib/utils';

interface ValuationSummary {
  minPrice: number | null;
  maxPrice: number | null;
  averagePrice: number | null;
  caskValue: number | null;
}

interface ValuationSummaryCardProps {
  summary: ValuationSummary;
}

const formatPrice = (price: number | null): string => {
  if (price === null) return '-';
  return `£${price.toLocaleString('en-GB')}`;
};

const summaryFields = [
  { label: 'Min Price', key: 'minPrice' as keyof ValuationSummary },
  { label: 'Max Price', key: 'maxPrice' as keyof ValuationSummary },
  { label: 'Average Price', key: 'averagePrice' as keyof ValuationSummary },
  { label: 'Cask Value', key: 'caskValue' as keyof ValuationSummary },
];

export function ValuationSummaryCard({ summary }: ValuationSummaryCardProps) {
  return (
    <Card className="bg-white shadow-sm bg-vintage-primary">
      <CardHeader>
        <CardTitle className="text-h6 font-playfair font-bold text-grey-900">
          Valuation Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-grey-100">
          {summaryFields.map((field, index) => {
            const value = summary[field.key];
            const displayValue = formatPrice(value);

            return (
              <div
                key={field.key}
                className='px-2 py-3'
              >
                <div className={cn("flex items-center justify-between px-4 text-label-sm font-poppins",
                  index % 2 === 0 ? '' : 'bg-vintage-secondary rounded-lg')}>
                  <span className="text-grey-600">
                    {field.label}
                  </span>
                  <span className="font-medium text-grey-900">
                    {displayValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card >
  );
}

