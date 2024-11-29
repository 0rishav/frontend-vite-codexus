import { Link } from "react-router-dom";

const Sidebar = ({showSidebar,setShowSidebar}) => {
  const closeSidebar = () => {
    setShowSidebar(false)
  }
  return (
    <div>
      <div className={`sidebar ${showSidebar ? 'shows' : ''}`}>
      <i className="fa fa-times cross-admin-icon" onClick={closeSidebar}></i>
        <h1>Codexuslab</h1>
        
        <ul className="sidebar-unorder">
          <li className="sidebar-order">
            <Link to="/admin-dashboard/dashboard">
              <i className="bi bi-house-door"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/billing">
              <i className="bi bi-cash"></i>
              <span>Billing</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/internship">
              <i className="bi bi-briefcase"></i>
              <span>Internship</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/registration">
              <i className="bi bi-person-lines-fill"></i>
              <span>Registration</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/users">
              <i className="bi bi-people"></i>
              <span>Users</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/question">
              <i className="bi bi-question-circle"></i>
              <span>Question</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/project-status">
              <i className="bi bi-diagram-3"></i>
              <span>Track Project</span>
            </Link>
          </li>
          <li className="sidebar-order">
            <Link to="/admin-dashboard/logout">
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
