import React from "react";
import {
  Users2Icon,
  PackageIcon,
  LineChartIcon,
  ClockIcon,
} from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total User"
        value="40,689"
        change="+8.5%"
        trend="up"
        subtitle="Up from yesterday"
        icon={<Users2Icon className="h-5 w-5 text-white" />}
        iconBg="bg-purple-100"
        iconCircle="bg-purple-400"
      />
      <StatCard
        title="Total Order"
        value="10293"
        change="+1.3%"
        trend="up"
        subtitle="Up from past week"
        icon={<PackageIcon className="h-5 w-5 text-white" />}
        iconBg="bg-yellow-100"
        iconCircle="bg-yellow-400"
      />
      <StatCard
        title="Total Sales"
        value="$89,000"
        change="-4.3%"
        trend="down"
        subtitle="Down from yesterday"
        icon={<LineChartIcon className="h-5 w-5 text-white" />}
        iconBg="bg-green-100"
        iconCircle="bg-green-400"
      />
      <StatCard
        title="Total Pending"
        value="2040"
        change="+1.8%"
        trend="up"
        subtitle="Up from yesterday"
        icon={<ClockIcon className="h-5 w-5 text-white" />}
        iconBg="bg-rose-100"
        iconCircle="bg-rose-400"
      />
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  trend,
  subtitle,
  icon,
  iconBg,
  iconCircle,
}: {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconCircle: string;
}) {
  const trendColor = trend === "up" ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${iconCircle}`}
        >
          {icon}
        </div>
      </div>
      <p className="text-2xl font-semibold text-gray-900 mb-[15px] -mt-[15px]">{value}</p>
      <div className="flex items-center space-x-1 text-sm">
        <span className={`${trendColor} font-medium`}>{change}</span>
        <span className="text-gray-400">{subtitle}</span>
      </div>
    </div>
  );
}
