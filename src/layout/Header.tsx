import React, { useEffect, useState } from "react";
import {
  MenuIcon,
  SearchIcon,
  BellIcon,
  ChevronDownIcon,
} from "lucide-react";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark" || document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 px-6 py-3 border-b dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <MenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>

        <div className="flex-1 flex justify-start ml-[25px]">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800 text-sm border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <BellIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold h-5 w-5 rounded-full flex items-center justify-center">
              6
            </span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              alt="flag"
              className="h-5 w-[40px] rounded-sm"
            />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              English
            </span>
            <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-300" />
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-medium text-gray-900 dark:text-white">
                Hartley
              </span>
              <span className="text-gray-500 dark:text-gray-400">Admin</span>
            </div>
          </div>

          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4a1 1 0 011 1v1.1a7 7 0 015.9 5.9H20a1 1 0 110 2h-1.1a7 7 0 01-5.9 5.9V20a1 1 0 11-2 0v-1.1a7 7 0 01-5.9-5.9H4a1 1 0 110-2h1.1a7 7 0 015.9-5.9V5a1 1 0 011-1zM12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21.75 12.001a9.75 9.75 0 11-9.747-9.75c.37 0 .69.259.744.625a.75.75 0 01-.5.793 7.5 7.5 0 108.085 8.085.75.75 0 01.793-.5c.366.054.625.374.625.744z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
