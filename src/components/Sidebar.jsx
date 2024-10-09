/* eslint-disable no-undef */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Import the image here

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <FaHome className="h-5 w-5" />,
      path: "/dashboard",
    },
    { name: "Blogs", icon: <FaFileAlt className="h-5 w-5" />, path: "/blogs" },
    {
      name: "Finances",
      icon: <FaChartBar className="h-5 w-5" />,
      path: "/finances",
    },
    {
      name: "Pitches",
      icon: <FaChartLine className="h-5 w-5" />,
      path: "/pitches",
    },
  ];

  const bottomItems = [
    {
      name: "Settings",
      icon: <FaCog className="h-5 w-5" />,
      path: "/settings",
    },
    {
      name: "Log out",
      icon: <FaSignOutAlt className="h-5 w-5" />,
      path: "/logout",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform lg:translate-x-0 transition-transform duration-300 fixed z-20 inset-y-0 left-0 w-60 bg-white shadow-md flex flex-col`}
      >
        {/* Logo Section */}
        <div className="flex items-center p-4">
          <img
            src={logo} // Use the imported image here
            alt="Logo"
            className="h-7 mr-2"
          />
          <span className="text-lg font-bold text-purple-700">Jadwa</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="mt-10 space-y-8">
            {sidebarItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center space-x-4 px-4 cursor-pointer ${
                  location.pathname === item.path
                    ? "text-purple-600 font-semibold border-l-4 border-purple-600"
                    : "text-gray-500 hover:text-purple-600"
                }`}
              >
                <Link to={item.path} className="flex items-center space-x-4">
                  {item.icon}
                  <span className="hidden lg:block">{item.name}</span>{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10 space-y-8">
          {bottomItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center space-x-4 px-4 cursor-pointer ${
                location.pathname === item.path
                  ? "text-purple-600 font-semibold border-l-4 border-purple-600"
                  : "text-gray-500 hover:text-purple-600"
              }`}
            >
              <Link to={item.path} className="flex items-center space-x-4">
                {item.icon}
                <span className="hidden lg:block">{item.name}</span>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <button
          className="p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          <FaBars className="text-gray-700 h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
