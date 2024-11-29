import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../features/api/userSlice";
import { useSelector } from "react-redux";

const Header = ({ scrolled }) => {
  const { token, user } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  const toggleDropdownProfile = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown-0")) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = () => {
    setShowDropdown(false); 
  };

  const handleLogout = async () => {
    try {
      const response = await logoutUser();

      if (response?.data?.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response?.data?.message || "Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    // topbar:------
    <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-globe me-2"></i>India
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>
                contact@codexuslabs.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="container-fluid position-relative p-0">
        <nav
          className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${
            scrolled ? "scrolled" : ""
          }`}
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1000",
            width: "100%",
            transition: "background-color 0.3s ease",
            backgroundColor: scrolled ? "#fff" : "transparent",
          }}
        >
          <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
            <img
              src="/image/logonew.png"
              alt="Logo"
              style={{ maxHeight: "40px", marginRight: "10px" }}
            />
            <h1 className="m-0" style={{ fontSize: "2.5rem", color: "#000" }}>
              Codexus Labs
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link
                style={{ color: "#000", fontWeight: 800 }}
                to="/service"
                className="nav-item nav-link"
              >
                Solutions & Services
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  style={{ color: "#000", fontWeight: 800 }}
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={toggleDropdown}
                >
                  Resources
                </Link>
                <div
                  className={`dropdown-menu m-0 ${dropdownOpen ? "show" : ""}`}
                  style={{ color: "#000", fontWeight: 400 }}
                >
                  <Link to="/codexuslabs" className="dropdown-item ">
                    Codexus Labs Info
                  </Link>
                  <Link to="/system-design" className="dropdown-item">
                    Case Studies
                  </Link>
                  <Link to="/project-registration" className="dropdown-item">
                    Project Registration
                  </Link>
                  <Link to="/Internship-registration" className="dropdown-item">
                    Internship Registration
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                style={{ color: "#000", fontWeight: 800 }}
                className="nav-item nav-link"
              >
                Careers
              </Link>
              <Link
                to="/about"
                style={{ color: "#000", fontWeight: 800 }}
                className="nav-item nav-link"
              >
                About Us
              </Link>
            </div>
            <div className="nav-item-5 dropdown-0">
              <div className="profile-icon" onClick={toggleDropdownProfile}>
                <i className="fas fa-user"></i>
              </div>
              {showDropdown && (
                <div className="dropdown-menu-profile">
                  <ul>
                    {user?.role === "admin" && (
                      <li onClick={handleItemClick}>
                        <Link to="/admin-dashboard">
                          <i className="fa fa-user-cog"></i> Admin
                        </Link>
                      </li>
                    )}
                    <li onClick={handleItemClick}>
                      <Link to="/user-profile">
                        <i className="fas fa-user"></i> My Profile
                      </Link>
                    </li>
                    <li onClick={handleItemClick}>
                      <a href="#">
                        <i className="fas fa-book-open"></i> My Courses
                      </a>
                    </li>
                    <li onClick={handleItemClick}>
                      <a href="#">
                        <i className="fas fa-user-edit"></i> Edit Profile
                      </a>
                    </li>
                    <li onClick={handleItemClick}>
                      <Link to="/track-projet-status">
                        <i className="fas fa-tasks"></i> Project Status
                      </Link>
                    </li>
                    <li onClick={handleItemClick}>
                      <a href="/user_dashboard/project_status.html">
                        <i className="fa fa-trophy"></i> LeaderBoard
                      </a>
                    </li>
                    <li onClick={handleItemClick}>
                      <Link to="/payment-history">
                        <i className="fas fa-credit-card"></i> Payment History
                      </Link>
                    </li>
                    <li onClick={handleItemClick}>
                      <a href="#">
                        <i className="fas fa-credit-card"></i> Settings
                      </a>
                    </li>
                    {!token ? (
                      <li className="loginButton" onClick={handleItemClick}>
                        <Link to="/login">
                          <i className="fas fa-user"></i> Login
                        </Link>
                      </li>
                    ) : (
                      <li className="logoutButton" onClick={handleItemClick}>
                        <a
                          href="#"
                          id="logoutButton"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                          }}
                        >
                          <i className="fas fa-sign-in-alt"></i> Logout
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Carousel Section */}
      </div>
    </div>
  );
};

export default Header;
