import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { cn } from '@repo/ui/lib/utils';

interface EvaluationStatus {
  name: string;
  value: number;
  color: string;
  bgColor: string;
}

const evaluationData: EvaluationStatus[] = [
  {
    name: 'Completed',
    value: 160,
    color: '#28B96C',
    bgColor: '#E9F8F0',
  },
  {
    name: 'In Progress',
    value: 50,
    color: '#408E9D',
    bgColor: '#C7EDE2',
  },
  {
    name: 'Failed',
    value: 48,
    color: '#AD0128',
    bgColor: '#FEE6EB',
  },
  {
    name: 'Pending',
    value: 44,
    color: '#CFB878',
    bgColor: '#F3EEDD',
  },
];

const COLORS = evaluationData.map((item) => item.color);

export function PendingEvaluations() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-h3 font-playfair font-bold text-grey-900">
          Pending Evaluations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Donut Chart */}
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={evaluationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {evaluationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4 md:w-64">
            {evaluationData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-1 rounded-full"
                    style={{ backgroundColor: item.color, height: '16px' }}
                  />
                  <span className="text-label-md font-poppins text-grey-900">
                    {item.name}
                  </span>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-label-sm font-poppins font-medium"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

