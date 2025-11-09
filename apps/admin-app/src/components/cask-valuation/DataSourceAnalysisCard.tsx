import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { cn } from '@repo/ui/lib/utils';

interface DataSource {
  name: string;
  price: number | null;
}

interface DataSourceAnalysisCardProps {
  dataSources: DataSource[];
}

const formatPrice = (price: number | null): string => {
  if (price === null) return '-';
  return `£${price.toLocaleString('en-GB')}`;
};

export function DataSourceAnalysisCard({ dataSources }: DataSourceAnalysisCardProps) {
  return (
    <Card className="bg-white shadow-sm bg-vintage-primary">
      <CardHeader>
        <CardTitle className="text-h6 font-playfair font-bold text-grey-900">
          Data Source Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-grey-100">
          {dataSources.map((source, index) => (
            <div
              key={source.name}
              className='px-2 py-3'
            >
              <div className={cn("flex items-center justify-between px-4 text-label-sm font-poppins",
                index % 2 === 0 ? '' : 'bg-vintage-secondary rounded-lg')}>
                <span className="text-grey-600">
                  {source.name}
                </span>
                <span className="font-medium text-grey-900">
                  {formatPrice(source.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

