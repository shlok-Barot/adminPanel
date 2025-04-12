import React from "react";
import { DashboardTable } from "../components/DashboardTable";
import { DashboardStats } from "../components/DashboardStats";
import { SalesChart } from "../components/SalesChart";

export const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Dashboard</h1>
      <DashboardStats />

      <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Details</h2>
          <select className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-white dark:bg-gray-800">
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <SalesChart />
      </div>

      <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Table</h2>
            <select className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-white dark:bg-gray-800">
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
        </div>
        <DashboardTable />
      </div>
    </>
  );
};
