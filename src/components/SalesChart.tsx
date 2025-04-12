import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "5k", value: 20 },
  { name: "10k", value: 45 },
  { name: "15k", value: 48 },
  { name: "20k", value: 88 },
  { name: "25k", value: 42 },
  { name: "30k", value: 57 },
  { name: "35k", value: 23 },
  { name: "40k", value: 26 },
  { name: "45k", value: 79 },
  { name: "50k", value: 63 },
  { name: "55k", value: 58 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-blue-600 text-sm font-semibold">
        {label} : {payload[0].value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </div>
    );
  }
  return null;
};

export function SalesChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(tick) => `${tick}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: "#3b82f6", r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#colorValue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
