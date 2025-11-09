import { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { Card } from '@repo/ui/components/ui/card';
import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';
import { StatusBadge } from './StatusBadge';
import { WhiskyProfileCard } from './WhiskyProfileCard';
import { ValuationSummaryCard } from './ValuationSummaryCard';
import { DataSourceAnalysisCard } from './DataSourceAnalysisCard';

export type ValuationResult = {
  id: string;
  caskName: string;
  distillery: string;
  caskId: string;
  distilleryType: string;
  status: 'Completed' | 'Pending' | 'Failed';
  whiskyProfile: {
    spirit: string;
    distillery: string;
    region: string;
    ays: string;
    age: number;
    abv: number;
  };
  valuationSummary: {
    minPrice: number | null;
    maxPrice: number | null;
    averagePrice: number | null;
    caskValue: number | null;
  };
  dataSources: {
    name: string;
    price: number | null;
  }[];
};

interface ValuationCardProps {
  valuation: ValuationResult;
  isMobile: boolean;
}

export function ValuationCard({ valuation, isMobile }: ValuationCardProps) {
  const [isExpanded, setIsExpanded] = useState(!isMobile);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="bg-white shadow-sm overflow-hidden gap-0 py-0">
      {/* Header */}
      {isMobile ? (
        <div
          className="p-4 border-b border-grey-100 transition-colors cursor-pointer hover:bg-grey-50"
          onClick={toggleExpand}
        >
          {/* Top row: Status badge and Chevron aligned to right */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <StatusBadge status={valuation.status} className="flex-shrink-0" />
            <button
              className="text-grey-600 flex-shrink-0"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Cask Name */}
          <h3 className="text-h5 font-playfair font-bold text-grey-900 mb-2">
            {valuation.caskName}
          </h3>
        </div>
      ) : (
        <div
          className={cn(
            'flex items-center justify-between p-4 md:p-6 border-b border-grey-100 transition-colors',
            !isExpanded && 'cursor-pointer hover:bg-grey-50'
          )}
          onClick={toggleExpand}
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <StatusBadge status={valuation.status} className="flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-h4 font-playfair font-bold text-grey-900">
                {valuation.caskName}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-label-sm font-poppins text-grey-600 bg-vintage-50 px-2 py-1 rounded-md">
                  {valuation.distilleryType}
                </span>
                <span className="text-label-sm font-poppins text-grey-600">
                  Cask ID: {valuation.caskId}
                </span>
              </div>
            </div>
          </div>
          <button
            className="ml-2 text-grey-600 flex-shrink-0 transition-transform"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>
      )}

      {/* Content with accordion animation */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className={cn('space-y-4 md:space-y-6', isMobile ? 'p-4' : 'p-4 md:p-6')}>
          {/* Download Button - Only for Completed status */}
          {valuation.status === 'Completed' && (
            <Button
              className="w-full md:w-auto gap-2 rounded-md text-label-sm font-poppins font-medium text-white hover:opacity-90"
              style={{
                background: 'linear-gradient(92deg, #E4D49E 2.13%, #DFB93B 97.37%)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                // Handle download
                console.log('Download report for', valuation.id);
              }}
            >
              <Download className="h-4 w-4" />
              Download Evaluation Report
            </Button>
          )}



          {/* Distillery Type and Cask ID */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-label-sm font-poppins text-vintage-600 bg-vintage-0 px-2 py-1 rounded-md border border-vintage-200">
              {valuation.distilleryType}
            </span>
            <span className="text-label-xs font-poppins text-grey-600 font-weight-[400]">
              Cask ID: {valuation.caskId}
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <WhiskyProfileCard profile={valuation.whiskyProfile} />
            <ValuationSummaryCard summary={valuation.valuationSummary} />
          </div>

          {/* Data Source Analysis - Full Width */}
          <DataSourceAnalysisCard dataSources={valuation.dataSources} />
        </div>
      </div>
    </Card>
  );
}

