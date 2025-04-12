import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from(
    {
      length: totalPages,
    },
    (_, i) => i + 1
  );
  return (
    <div className="flex justify-end items-center mt-4 gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-1 rounded ${
          currentPage === 1
            ? "text-gray-300"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-md ${
            currentPage === page
              ? "bg-[#377DFF] text-white"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`p-1 rounded ${
          currentPage === totalPages
            ? "text-gray-300"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
