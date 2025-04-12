import React from "react";
interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  statusOptions: string[];
  selectedStatuses: string[];
  onStatusToggle: (status: string) => void;
  onApply: () => void;
}
export const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  onClose,
  statusOptions,
  selectedStatuses,
  onStatusToggle,
  onApply,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-[370px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-[#151D48] mb-4">
          Select Status
        </h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => onStatusToggle(status)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                selectedStatuses.includes(status)
                  ? "bg-[#377DFF] text-white border-[#377DFF]"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mb-4">
          *You can choose multiple status
        </p>
        <button
          onClick={onApply}
          className="bg-[#377DFF] text-white w-full py-2 rounded-md hover:bg-[#2563eb]"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};
