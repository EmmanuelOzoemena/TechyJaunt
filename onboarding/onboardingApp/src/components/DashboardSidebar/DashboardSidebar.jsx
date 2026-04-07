import { FaChartLine } from "react-icons/fa";
import { FaSignOutAlt, FaUser } from "react-icons/fa"
import { FiMessageSquare } from "react-icons/fi"

import "./DashboardSidebar.css";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-icons">
        <FaChartLine size={24} />
      </div>
      <div className="sidebar-icons">
        <FaChartLine size={24} />
      </div>
      <div className="sidebar-icons">
        <FaChartLine size={24} />
      </div>
      <div className="sidebar-icons">
        <FaChartLine size={24} />
      </div>
      <div className="sidebar-icons">
        <FaChartLine size={24} />
      </div>
      <div className="sidebar-icons">
        <FiMessageSquare size={24} />
      </div>
      <div className="sidebar-icons">
        <FaUser size={24} />
      </div>
      <div className="sidebar-icons">
        <FaSignOutAlt size={24} />
      </div>
    </div>
  );
};

export default DashboardSidebar;
