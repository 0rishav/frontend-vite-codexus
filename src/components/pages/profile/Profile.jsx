import { useEffect, useState } from "react";
import "./profile.css";
import { useLazyLoadUserQuery, useUpdateUserMutation } from "../../../features/api/userSlice";
import toast from "react-hot-toast";
const Profile = () => {
  const [triggerLoadUser, { data, error, isLoading }] = useLazyLoadUserQuery();
  const [updateUser] = useUpdateUserMutation();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    role: "Loading...",
  });
  const [formErrors, setFormErrors] = useState({ name: "", email: "" });

  useEffect(() => {
    triggerLoadUser();
  }, [triggerLoadUser]);
 
    useEffect(() => {
      if (isLoading) {
        setUserDetails({ name: "Loading...", email: "", role: "Loading..." }); 
      }
      if (error) {
        console.error("Error fetching user details:", error);
        setUserDetails({
          name: "Error fetching details",
          email: "",
          role: "Error",
        });
      }
      if (data) {
        
        setUserDetails({
          name: data.user.name || "No name available",
          email: data.user.email || "No email available",
          role: data.user.role || "No role available",
        });
      }
    }, [isLoading, error, data]);
  

  const updateUserDetails = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await updateUser(userDetails).unwrap();
      toast.success(response.message); 
      if (response.updatedUser) {
        setUserDetails(response.updatedUser);
      }
    } catch (error) {
      // Handle error response
      toast.error(error.message || 'Error while updating user');
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "" };

    if (!userDetails.name) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!userDetails.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      errors.email = "Please enter a valid email.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <div className="main">
      <div className="profile-section" style={{padding:"10px 40px"}}>
        <button
              className="back-button-css"
              onClick={() => window.history.back()}
              title="GoBack"
              style={{backgroundColor:"#0073e6"}}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
        </div>
        <div className="profile">
        
          <div className="profile-card card1">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg"
              alt="mountain"
            />
          </div>
        </div>
        <br />
        <div className="profile-container">
          <div className="profile-item profile1">
            <div className="profile-image-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="profile-img"
              >
                <circle cx="50" cy="50" r="45" fill="#4A90E2" />
                <text
                  x="50%"
                  y="50%"
                  fontSize="35"
                  fill="white"
                  textAnchor="middle"
                  dy=".3em"
                >
                  AB
                </text>
              </svg>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{userDetails.name}</h2>
              <p className="profile-email">{userDetails.email}</p>
              <p className="profile-role">Role: {userDetails.role}</p>
            </div>
          </div>
          <div className="profile-item profile2">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Update Profile
            </h2>
            <div className="profile-form-container">
              <form
                className="profile-update-form"
                onSubmit={updateUserDetails}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    value={userDetails.name}
                    onChange={handleInputChange}
                  />
                  <p className="error-message">{formErrors.name}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    value={userDetails.email}
                    onChange={handleInputChange}
                  />
                  <p className="error-message">{formErrors.email}</p>
                </div>

                <div className="form-group">
                  <button type="submit" className="submit-btn">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Profile;
