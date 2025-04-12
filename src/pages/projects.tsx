import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FilterBar } from "../components/FilterBar";
import { StatusModal } from "../components/StatusModal";
import { Pagination } from "../components/Pagination";
import { Project } from "../types";
import { Pencil, Download, History } from "lucide-react";
const statusOptions = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
];
const ITEMS_PER_PAGE = 10;
const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { projects } = useSelector((state: RootState) => state.projects);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [tempStatuses, setTempStatuses] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleStatusToggle = (status: string) => {
    setTempStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };
  const applyStatusFilter = () => {
    setSelectedStatuses(tempStatuses);
    setIsStatusModalOpen(false);
  };
  const resetFilter = () => {
    setSelectedStatuses([]);
    setSelectedDate("");
    setTempStatuses([]);
  };
  const filteredProjects = projects.filter((project) => {
    const statusMatch =
      selectedStatuses.length === 0 ||
      selectedStatuses.includes(project.status);
    const dateMatch =
      !selectedDate || (project.dueDate && project.dueDate === selectedDate);
    return statusMatch && dateMatch;
  });
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  );
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStatuses, selectedDate]);
  const handleEditClick = (project: Project) => {
    navigate("/add-project", {
      state: {
        project,
        isEditing: true,
      },
    });
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Projects</h1>
        <button
          className="bg-[#377DFF] hover:bg-[#2563eb] text-white px-5 py-2 rounded-md font-medium"
          onClick={() => navigate("/add-project")}
        >
          Add Project
        </button>
      </div>

      <FilterBar
        onDateChange={setSelectedDate}
        onStatusOpen={() => {
          setTempStatuses(selectedStatuses);
          setIsStatusModalOpen(true);
        }}
        onResetFilter={resetFilter}
        selectedDate={selectedDate}
        selectedStatuses={selectedStatuses}
      />

      <div className="bg-white p-4 rounded shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-700 text-sm border-b">
              <th
                colSpan={3}
                className="py-3 px-4 font-medium bg-gray-50 border-r text-center"
              >
                PROJECT REFERENCE
              </th>
              <th
                colSpan={2}
                className="py-3 px-4 font-medium bg-gray-50 border-r text-center"
              >
                PROJECT LOCATION
              </th>
              <th
                colSpan={2}
                className="py-3 px-4 font-medium bg-gray-50 border-r text-center"
              >
                ASSIGNED TO
              </th>
              <th colSpan={5} className="py-3 px-4 font-medium bg-gray-50 text-center">
                PROJECT INFO
              </th>
            </tr>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b">
              <th className="py-3 px-4">CUSTOMER</th>
              <th className="py-3 px-4">REFERENCE NUMBER</th>
              <th className="py-3 px-4">PROJECT NAME</th>
              <th className="py-3 px-4">PROJECT NUMBER</th>
              <th className="py-3 px-4">AREA LOCATION</th>
              <th className="py-3 px-4">ADDRESS</th>
              <th className="py-3 px-4">MANAGER</th>
              <th className="py-3 px-4">STAFF</th>
              <th className="py-3 px-4">DUE DATE</th>
              <th className="py-3 px-4">CONTACT</th>
              <th className="py-3 px-4">EMAIL</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">ACTION</th>
              <th className="py-3 px-4">COMMENTS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProjects.length === 0 ? (
              <tr>
                <td colSpan={14} className="text-center py-6 text-gray-500">
                  No projects found.
                </td>
              </tr>
            ) : (
              paginatedProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-50 text-sm text-gray-800 border-t"
                >
                  <td className="py-4 px-4">{project.customer}</td>
                  <td className="py-4 px-4">{project.referenceNumber}</td>
                  <td className="py-4 px-4">{project.projectName}</td>
                  <td className="py-4 px-4">{project.projectNumber}</td>
                  <td className="py-4 px-4">{project.areaLocation}</td>
                  <td className="py-4 px-4">{project.address}</td>
                  <td className="py-4 px-4">
                    {project.manager || "Not Assigned"}
                  </td>
                  <td className="py-4 px-4">
                    {project.staff || "Not Assigned"}
                  </td>
                  <td className="py-4 px-4">{project.dueDate || "Not Set"}</td>
                  <td className="py-4 px-4">
                    {project.contact || "Not Available"}
                  </td>
                  <td className="py-4 px-4">
                    {project.email || "Not Available"}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-[#E6F4F1] text-[#0D9488]"
                          : project.status === "Rejected"
                          ? "bg-[#FEE2E2] text-[#EF4444]"
                          : project.status === "Processing"
                          ? "bg-[#EEE6FE] text-[#8B5CF6]"
                          : project.status === "On Hold"
                          ? "bg-gray-100 text-gray-700"
                          : project.status === "In Transit"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => handleEditClick(project)}
                      >
                        <Pencil size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Download size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <History size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400"></div>
                      <button className="w-6 h-6 rounded-full bg-gray-100 text-[10px] text-gray-500 flex items-center justify-center border-2 border-white">
                        16+
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {filteredProjects.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      <StatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        statusOptions={statusOptions}
        selectedStatuses={tempStatuses}
        onStatusToggle={handleStatusToggle}
        onApply={applyStatusFilter}
      />
    </div>
  );
};
export default ProjectsPage;
