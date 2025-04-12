import React, { useState } from "react";
import { FilterIcon, ChevronDown, RotateCcw } from "lucide-react";
interface FilterBarProps {
  onDateChange: (date: string) => void;
  onStatusOpen: () => void;
  onResetFilter: () => void;
  selectedDate: string;
  selectedStatuses: string[];
}
export const FilterBar: React.FC<FilterBarProps> = ({
  onDateChange,
  onStatusOpen,
  onResetFilter,
  selectedDate,
  selectedStatuses,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-6 mb-6 text-sm font-medium">
      <div className="flex items-center gap-2 text-[#151D48] cursor-pointer">
        <FilterIcon size={16} className="text-gray-600" />
        <span>Filter By</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <button className="border border-gray-300 bg-white text-gray-700 px-4 py-1.5 rounded-md flex items-center gap-1">
            Date <ChevronDown size={12} />
          </button>
          <input
            type="date"
            className="absolute opacity-0 inset-0 cursor-pointer"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
          />
        </div>
      </div>
      <div className="relative">
        <button className="border border-gray-300 bg-white text-gray-700 px-4 py-1.5 rounded-md flex items-center gap-1">
          Hide Columns <ChevronDown size={12} />
        </button>
      </div>
      <div>
        <button
          onClick={onStatusOpen}
          className="border border-gray-300 bg-white text-gray-700 px-4 py-1.5 rounded-md flex items-center gap-1"
        >
          Status <ChevronDown size={12} />
        </button>
      </div>
      <button
        onClick={onResetFilter}
        className="text-[#F04438] flex items-center gap-1 ml-auto hover:underline"
      >
        <RotateCcw size={14} />
        Reset Filter
      </button>
    </div>
  );
};
