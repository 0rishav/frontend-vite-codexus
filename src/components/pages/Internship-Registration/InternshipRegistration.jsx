import { useState } from "react";
import "./internship-registration.css";
import toast from "react-hot-toast";
import { useRegisterInternshipMutation } from "../../../features/admin/adminApi";
const InternshipRegistration = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    internshipField: "",
    availability: "",
    skills: "",
    projectDescription: "",
  });
  const [registerInternship] = useRegisterInternshipMutation();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Send data to API
      const response = await registerInternship(formData).unwrap();
      console.log(response);

      if (response.success) {
        toast.success("Thanks for Registration!");

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobileNumber: "",
          internshipField: "",
          availability: "",
          skills: "",
          projectDescription: "",
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
  return (
    <div>
      <div className="parent-project">
        <div>
          <div className="container">
            <div className="title-section">
            <button
              className="back-button-css"
              onClick={() => window.history.back()}
              title="GoBack"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
              <i className="fas fa-briefcase header-icon"></i>
              <h1>Internship Registration</h1>
              <div className="title-divider"></div>
              <p>
                Codexus team offers valuable internship opportunities to
                students seeking hands-on experience in various fields.
              </p>
            </div>

            <div className="form-container">
              <div className="required-note">
                <i className="fas fa-info-circle me-2"></i>Fields marked with *
                are mandatory
              </div>

              <form onSubmit={handleSubmit}>
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
                        value={formData.firstname}
                        onChange={handleChange}
                        id="firstname"
                      />
                    </div>
                    {errors.firstname && (
                      <span className="error-message-internship">
                        {errors.firstname}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label required-field">
                      Last Name
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter last name"
                        value={formData.lastname}
                        onChange={handleChange}
                        id="lastname"
                      />
                    </div>
                    {errors.lastname && (
                      <span className="error-message-internship">
                        {errors.lastname}
                      </span>
                    )}
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
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                      />
                    </div>
                    {errors.email && (
                      <span className="error-message-internship">
                        {errors.email}
                      </span>
                    )}
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
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        id="mobileNumber"
                      />
                    </div>
                    {errors.mobile && (
                      <span className="error-message-internship">
                        {errors.mobileNumber}
                      </span>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label required-field">
                      Preferred Internship Field
                    </label>
                    <select
                      className="form-select"
                      value={formData.internshipField}
                      onChange={handleChange}
                      id="internshipField"
                    >
                      <option value="" disabled>
                        Select a field
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Marketing">Marketing</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Human Resources">Human Resources</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Availability (Months)</label>
                    <select
                      className="form-select"
                      value={formData.availability}
                      onChange={handleChange}
                      id="availability"
                    >
                      <option value="" disabled>
                        Select Availability
                      </option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="9">9 months</option>
                    </select>
                  </div>
                </div>

                <div className="section-divider">
                  <span>
                    <i className="fas fa-tools me-2"></i>Skills & Experience
                  </span>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Describe your relevant skills
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="List your skills (e.g., programming languages, software, tools, etc.)"
                    value={formData.skills}
                    onChange={handleChange}
                    id="skills"
                  ></textarea>
                </div>
                {errors.skills && (
                  <span className="error-message-internship">
                    {errors.skills}
                  </span>
                )}

                <div className="mb-3">
                  <label className="form-label">
                    Brief Description of Previous Projects
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Describe any projects or tasks you've worked on that are relevant to this internship"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    id="projectDescription"
                  ></textarea>
                </div>
                {errors.description && (
                  <span className="error-message-internship">
                    {errors.description}
                  </span>
                )}

                <div className="submit-section text-center">
                  <button type="submit" className="btn-submit">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipRegistration;
