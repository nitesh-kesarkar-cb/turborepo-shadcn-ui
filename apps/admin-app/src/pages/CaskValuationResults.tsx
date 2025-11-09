import { useState, useEffect } from 'react';
import { ValuationCard } from '../components/cask-valuation/ValuationCard';
import type { ValuationResult } from '../components/cask-valuation/ValuationCard';

// Sample data based on the design
const sampleValuations: ValuationResult[] = [
  {
    id: '1',
    caskName: 'Glenshiel (Glenrothes)',
    distillery: 'Glenrothes',
    caskId: 'HD-SB-2015-0315',
    distilleryType: 'Highland Distillery',
    status: 'Completed',
    whiskyProfile: {
      spirit: 'Glenshiel',
      distillery: 'Glenrothes',
      region: 'Speyside',
      ays: '17/06/2015',
      age: 17,
      abv: 69.7,
    },
    valuationSummary: {
      minPrice: 11500,
      maxPrice: 12500,
      averagePrice: 11500,
      caskValue: 51500,
    },
    dataSources: [
      { name: 'Whiskybase', price: 9500 },
      { name: 'Old and Rare whiskey', price: 9500 },
      { name: 'Master of Malt', price: 9500 },
      { name: 'Wine-Searcher', price: 9500 },
      { name: 'The Whiskey Exchange', price: 9500 },
    ],
  },
  {
    id: '2',
    caskName: 'Glenshiel (Glenrothes)',
    distillery: 'Glenrothes',
    caskId: 'HD-SB-2015-0315',
    distilleryType: 'Highland Distillery',
    status: 'Pending',
    whiskyProfile: {
      spirit: 'Glenshiel',
      distillery: 'Glenrothes',
      region: 'Speyside',
      ays: '17/06/2015',
      age: 17,
      abv: 69.7,
    },
    valuationSummary: {
      minPrice: null,
      maxPrice: null,
      averagePrice: null,
      caskValue: null,
    },
    dataSources: [
      { name: 'Whiskybase', price: null },
      { name: 'Old and Rare whiskey', price: null },
      { name: 'Master of Malt', price: null },
      { name: 'Wine-Searcher', price: null },
      { name: 'The Whiskey Exchange', price: null },
    ],
  },
  {
    id: '3',
    caskName: 'Glenshiel (Glenrothes)',
    distillery: 'Glenrothes',
    caskId: 'HD-SB-2015-0315',
    distilleryType: 'Highland Distillery',
    status: 'Failed',
    whiskyProfile: {
      spirit: 'Glenshiel',
      distillery: 'Glenrothes',
      region: 'Speyside',
      ays: '17/06/2015',
      age: 17,
      abv: 69.7,
    },
    valuationSummary: {
      minPrice: null,
      maxPrice: null,
      averagePrice: null,
      caskValue: null,
    },
    dataSources: [
      { name: 'Whiskybase', price: null },
      { name: 'Old and Rare whiskey', price: null },
      { name: 'Master of Malt', price: null },
      { name: 'Wine-Searcher', price: null },
      { name: 'The Whiskey Exchange', price: null },
    ],
  },
];

export function CaskValuationResults() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-6">

      {/* Valuation Cards */}
      <div className="flex flex-col gap-4 md:gap-6">
        {sampleValuations.map((valuation) => (
          <ValuationCard
            key={valuation.id}
            valuation={valuation}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
