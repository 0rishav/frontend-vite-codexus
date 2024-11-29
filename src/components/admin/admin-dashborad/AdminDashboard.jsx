import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dasboard/Dashboard";
import Sidebar from "./Sidebar";
import Billing from "../billing/Billing";
import ProjectStatus from "../project-status/ProjectStatus";
import Internship from "../Internship/Internship";
import Registration from "../Registration/Registration";
import User from "../users/User";
import Question from "../Question/Question";
import Navbar from "./Navbar";
import { useState } from "react";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>

      {/* Content */}

      <div className="admin-content">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="billing" element={<Billing />} />
          <Route path="project-status" element={<ProjectStatus />} />
          <Route path="internship" element={<Internship />} />
          <Route path="registration" element={<Registration />} />
          <Route path="users" element={<User />} />
          <Route path="question" element={<Question />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
