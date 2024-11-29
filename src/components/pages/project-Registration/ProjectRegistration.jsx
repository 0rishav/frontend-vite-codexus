import { useState } from "react";
import "./project-registration.css";
import toast from "react-hot-toast";
import { useRegisterProjectMutation } from "../../../features/admin/adminApi";

const ProjectRegistration = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    collegeName: "",
    degree: "",
    semester: "",
    projectName: "",
    projectDescription: "",
    dateGiven: "",
    deadline: "",
    queries: "",
  });

  const [registerProject] = useRegisterProjectMutation();

  const [errors, setErrors] = useState({});
  console.log(errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrorMessages();

    let isValid = true;
    let validationErrors = {};

    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === "") {
        validationErrors[field] = `${field} is required`;
        isValid = false;
      }
    });

    console.log(formData);
    console.log(validationErrors);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send data to API
      const response = await registerProject(formData).unwrap();

      if (response.success) {
        toast.success("Thanks for Registration!");

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobileNumber: "",
          collegeName: "",
          degree: "",
          semester: "",
          projectName: "",
          projectDescription: "",
          dateGiven: "",
          deadline: "",
          queries: "",
        });
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (err) {
      const errorMessage =
        err?.data?.message || err?.message || "Something went wrong!";
      toast.error(errorMessage);
    }
  };

  const clearErrorMessages = () => {
    setErrors({});
  };
  return (
    <div>
      <div className="parent-project">
        <div className="container">
          {/* Title Section */}
          <div className="title-section">
            <button
              className="back-button-css"
              onClick={() => window.history.back()}
              title="GoBack"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <i className="fas fa-user-graduate header-icon"></i>
            <h1>Project Registration</h1>
            <div className="title-divider"></div>
            <p>
              Codexus team offers support and assistance for projects of all
              kinds, including mini projects, final year work, business
              initiatives, hospital system implementations, and other
              specialized domains.
            </p>
          </div>

          {/* Form Container */}
          <div className="form-container">
            <div className="required-note">
              <i className="fas fa-info-circle me-2"></i>Fields marked with *
              are mandatory
            </div>

            <form id="projectForm" onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <div className="section-divider">
                <span>
                  <i className="fas fa-user me-2"></i>Personal Information
                </span>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label required-field">
                    First Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.firstname && (
                    <span className="error-message-project">{errors.firstname}</span>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label required-field">Last Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.lastname}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label required-field">
                    Email Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.email}</span>
                </div>

                <div className="col-md-6">
                  <label className="form-label required-field">
                    Mobile Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-phone"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter mobile number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.mobileNumber}</span>
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="section-divider">
                <span>
                  <i className="fas fa-university me-2"></i>Academic Information
                </span>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label className="form-label required-field">
                    College Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-school"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter college name"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.collegeName}</span>
                </div>
              </div>

              {/* Degree and Semester */}
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label required-field">Degree</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-graduation-cap"></i>
                    </span>
                    <select
                      className="form-select"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select degree
                      </option>
                      <option value="BE">BE (Bachelor of Engineering)</option>
                      <option value="B.tech">
                        B.Tech (Bachelor of Technology)
                      </option>
                      <option value="M.tech">
                        M.Tech (Master of Technology)
                      </option>
                      <option value="MCA">
                        MCA (Master of Computer Applications)
                      </option>
                      <option value="BCA">
                        BCA (Bachelor of Computer Applications)
                      </option>
                      <option value="B.sc">B.Sc (Bachelor of Science)</option>
                      <option value="M.sc">M.Sc (Master of Science)</option>
                      <option value="Ph.D">Ph.D (Doctor of Philosophy)</option>
                    </select>
                  </div>
                  <span className="error-message-project">{errors.degree}</span>
                </div>

                <div className="col-md-6">
                  <label className="form-label required-field">
                    Current Semester
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-book-open"></i>
                    </span>
                    <select
                      className="form-select"
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select semester
                      </option>
                      <option value="1st semester">Semester 1</option>
                      <option value="2nd semester">Semester 2</option>
                      <option value="3rd semester">Semester 3</option>
                      <option value="4th semester">Semester 4</option>
                      <option value="5th semester">Semester 5</option>
                      <option value="6th semester">Semester 6</option>
                      <option value="7th semester">Semester 7</option>
                      <option value="8th semester">Semester 8</option>
                    </select>
                  </div>
                  <span className="error-message-project">{errors.semester}</span>
                </div>
              </div>

              {/* Project Information Section */}
              <div className="section-divider">
                <span>
                  <i className="fas fa-project-diagram me-2"></i>Project
                  Information
                </span>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label className="form-label required-field">
                    Project Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-clipboard"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter project name"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.projectName}</span>
                </div>
              </div>

              {/* Project Description */}
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label required-field">
                    Project Description
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-align-left"></i>
                    </span>
                    <textarea
                      className="form-control"
                      placeholder="Enter project description"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <span className="error-message-project">
                    {errors.projectDescription}
                  </span>
                </div>
              </div>

              {/* Deadline and Date Given */}
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label required-field">
                    Date Given
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-calendar-alt"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      name="dateGiven"
                      value={formData.dateGiven}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.dateGiven}</span>
                </div>

                <div className="col-md-6">
                  <label className="form-label required-field">
                    Project Deadline
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="error-message-project">{errors.deadline}</span>
                </div>
              </div>

              {/* Query Section */}
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label">Queries</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-question-circle"></i>
                    </span>
                    <textarea
                      className="form-control"
                      placeholder="Enter your queries"
                      name="queries"
                      value={formData.queries}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRegistration;
