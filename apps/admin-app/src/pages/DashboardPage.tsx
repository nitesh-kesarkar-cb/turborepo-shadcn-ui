import { BarChart3, FileCheck, Users } from 'lucide-react';
import { MetricCard } from '../components/dashboard/MetricCard';
import { PendingEvaluations } from '../components/dashboard/PendingEvaluations';

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <MetricCard
          icon={BarChart3}
          iconBgColor="bg-green-500"
          value="25"
          label="Total Casks"
          onViewDetails={() => console.log('View Total Casks details')}
        />
        <MetricCard
          icon={FileCheck}
          iconBgColor="bg-vintage-200"
          value="05"
          label="Casks Evaluated"
          onViewDetails={() => console.log('View Casks Evaluated details')}
        />
        <MetricCard
          icon={Users}
          iconBgColor="bg-teal-400"
          value="50"
          label="Number of Active Customers"
          onViewDetails={() => console.log('View Active Customers details')}
        />
      </div>

      {/* Pending Evaluations */}
      <PendingEvaluations />
    </div>
  );
}
