// Sidebar.jsx
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaUserTie, 
  FaClipboardList, 
  FaIdBadge,        
  FaChartLine, 
  FaRegLightbulb,   
  FaDumbbell 
} from "react-icons/fa";

import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 py-2 px-3 rounded-lg font-bold transition-all duration-200
     ${isActive ? "bg-green-600 text-white" : "text-gray-800 hover:bg-green-600 hover:text-white"}`;

  return (
    <div className="h-screen w-72 bg-[#d9e3db] flex flex-col justify-between shadow-md">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center py-6">
          <img
            src="/logo.png" 
            alt="WellVantage"
            className="w-20 h-20 mb-4"
          />
          <h1 className="text-2xl font-semibold">WellVantage</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-5 px-6">
          <NavLink to="/dashboard" className={linkClasses}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
          <NavLink to="/lead-management" className={linkClasses}>
            <FaUsers /> Lead Management
          </NavLink>
          <NavLink to="/wellvantage-leads" className={linkClasses}>
            ✔ WellVantage Leads
          </NavLink>
          <NavLink to="/member-management" className={linkClasses}>
            <FaUserTie /> Member Management
          </NavLink>
          <NavLink to="/membership-management" className={linkClasses}>
            <FaIdBadge /> Membership Management
          </NavLink>
          <NavLink to="/attendance-tracking" className={linkClasses}>
            <FaClipboardList /> Attendance Tracking
          </NavLink>
          <NavLink to="/employee-management" className={linkClasses}>
            <FaUsers /> Employee Management
          </NavLink>
          <NavLink to="/revenue-management" className={linkClasses}>
            <FaChartLine /> Revenue Management
          </NavLink>
          <NavLink to="/expense-management" className={linkClasses}>
            <FaRegLightbulb /> Expense Management & Profit
          </NavLink>
          <NavLink to="/workout-management" className={linkClasses}>
            <FaDumbbell /> Workout Management
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-6 py-6 space-y-4">
        {/* Profile */}
        <div className="flex items-center gap-3 bg-green-200 rounded-xl px-4 py-2">
          <img
            src="/profile.png" 
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">David Smith</span>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-3 text-gray-800 px-3 py-2 rounded-lg font-semibold transition-all duration-200 mt-7">
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
}