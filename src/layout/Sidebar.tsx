import React from "react";
import { LayoutDashboardIcon, FoldersIcon, ClipboardIcon } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboardIcon className="h-5 w-5 mr-3" />,
    },
    {
      name: "Projects",
      path: "/project",
      icon: <FoldersIcon className="h-5 w-5 mr-3" />,
    },
    {
      name: "Estimates",
      path: "/estimates",
      icon: <ClipboardIcon className="h-5 w-5 mr-3" />,
    },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 flex flex-col">
      <div className="">
        <div className="flex items-center justify-center h-full p-6">
          <span className="text-2xl font-bold text-black dark:text-white">
            LO<span className="text-blue-600">GO</span>
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-0">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
