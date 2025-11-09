import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { cn } from '@repo/ui/lib/utils';

interface EvaluationStatus {
  name: string;
  value: number;
  color: string;
  bgColor: string;
  borderColor: string;
  gradientStartColor: string;
  gradientEndColor: string;
}

const evaluationData: EvaluationStatus[] = [
  {
    name: 'Pending',
    value: 44,
    color: '#B09F66',
    bgColor: '#FEFBF0',
    borderColor: '#DDCFA0',
    gradientStartColor: '#EED789',
    gradientEndColor: '#BCA146',
  },
  {
    name: 'In Progress',
    value: 50,
    color: '#4A9AAA',
    bgColor: '#C9EAF0',
    borderColor: '#C9EAF0',
    gradientStartColor: '#489DAE',
    gradientEndColor: '#9BD7E3',
  },
  {
    name: 'Failed',
    value: 48,
    color: '#F40139',
    bgColor: '#F8E8EC',
    borderColor: '#F69CB1',
    gradientStartColor: '#E26682',
    gradientEndColor: '#A31F3D',
  },
  {
    name: 'Completed',
    value: 60,
    color: '#1AA65B',
    bgColor: '#EBF7F0',
    borderColor: '#9AE8BE',
    gradientStartColor: '#26BD6C',
    gradientEndColor: '#047B3B',
  },
];

export function PendingEvaluations() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-h3 font-playfair font-bold text-grey-900">
          Pending Evaluations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-5">
          {/* Donut Chart */}
          <div className="flex w-full justify-center md:w-[400px] md:max-w-md md:flex-shrink-0">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <defs>
                  {evaluationData.map((item, index) => {
                    return (
                      <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={item.gradientStartColor} />
                        <stop offset="100%" stopColor={item.gradientEndColor} />
                      </linearGradient>
                    );
                  })}
                </defs>
                <Pie
                  data={evaluationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {evaluationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col md:flex-1 border border-1 rounded-xl">
            {evaluationData.map((item, index) => (
              <div key={item.name} className={cn('flex items-center justify-between gap-4 py-3 px-5', index !== evaluationData.length - 1 ? 'border-b' : '')}>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm md:text-base text-gray-700">{item.name}</span>
                </div>
                <div
                  className="rounded-md px-4 rounded-md border text-sm md:text-base font-medium min-w-[90px] text-center"
                  style={{ 
                    backgroundColor: item.bgColor, 
                    color: item.color,
                    border: `1px solid ${item.color}`
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

