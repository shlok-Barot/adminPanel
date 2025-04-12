import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject, updateProject } from "../redux/projectsSlice";
import { AddProjectFormData, Project } from "../types";
import { ChevronDown } from "lucide-react";
const customerOptions = [
  "Olivia Martin",
  "Michael Jones",
  "John Doe",
  "Ella Lewis",
  "James Rodriguez",
];
const AddProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const editingProject = location.state?.project as Project | undefined;
  const isEditing = location.state?.isEditing || false;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProjectFormData>({
    defaultValues: editingProject,
  });
  useEffect(() => {
    if (editingProject) {
      reset(editingProject);
    }
  }, [editingProject, reset]);
  const onSubmit = (data: AddProjectFormData) => {
    if (isEditing && editingProject) {
      const updatedProject: Project = {
        ...data,
        id: editingProject.id,
      };
      dispatch(updateProject(updatedProject));
    } else {
      const newProject: Project = {
        ...data,
        id: Date.now().toString(),
      };
      dispatch(addProject(newProject));
    }
    navigate("/project");
  };
  return (
    <div className="mx-auto">
     <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {isEditing ? "Edit Project" : "Add New Project"}
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer
              </label>
              <div className="relative">
                <select
                  {...register("customer", {
                    required: "Customer is required",
                  })}
                  className="w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                  <option value="">Select customer</option>
                  {customerOptions.map((customer) => (
                    <option key={customer} value={customer}>
                      {customer}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
              {errors.customer && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.customer.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference Number
              </label>
              <input
                type="text"
                {...register("referenceNumber", {
                  required: "Reference number is required",
                })}
                placeholder="Enter your reference number"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.referenceNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.referenceNumber.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                {...register("projectName", {
                  required: "Project name is required",
                })}
                placeholder="Enter your project name"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.projectName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.projectName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Number
              </label>
              <input
                type="text"
                {...register("projectNumber", {
                  required: "Project number is required",
                })}
                placeholder="Enter your project number"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.projectNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.projectNumber.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area Location
              </label>
              <input
                type="text"
                {...register("areaLocation", {
                  required: "Area location is required",
                })}
                placeholder="Enter your project area location"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.areaLocation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.areaLocation.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                {...register("address", {
                  required: "Address is required",
                })}
                placeholder="Enter your project address"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Due Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("dueDate", {
                    required: "Due date is required",
                  })}
                  className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.dueDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dueDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact
              </label>
              <input
                type="text"
                {...register("contact", {
                  required: "Contact is required",
                })}
                placeholder="Enter your contact"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.contact && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contact.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Manager
              </label>
              <input
                type="text"
                {...register("manager", {
                  required: "Manager is required",
                })}
                placeholder="Enter project manager"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.manager && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.manager.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Staff
              </label>
              <input
                type="text"
                {...register("staff", {
                  required: "Staff is required",
                })}
                placeholder="Enter project staff"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.staff && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.staff.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <input
                type="text"
                {...register("status", {
                  required: "Status is required",
                })}
                placeholder="Enter project status"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.status && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className="text-gray-900 w-full bg-[#F8FAFC] border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              className="bg-[#377DFF] hover:bg-[#2563eb] text-white px-8 py-2 rounded-md font-medium"
            >
              {isEditing ? "Update Project" : "Add Now"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/project")}
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-2 rounded-md font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProjectPage;
