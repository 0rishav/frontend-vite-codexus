import React, { useEffect, useState } from "react";
import "./project-track.css";
import { useSelector } from "react-redux";
import { useGetStatusHistoryQuery } from "../../../features/admin/adminApi";

const ProjectTrack = () => {
  const user = useSelector((state) => state.auth.user);
  const [projects, setProjects] = useState([]);
  const [statusHistory, setStatusHistory] = useState([]);
  const [showTrackContainer, setShowTrackContainer] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const { data, error, isLoading } = useGetStatusHistoryQuery(projectId, {
    skip: !projectId,
  });

  useEffect(() => {
    if (user && user.projectsCreated) {
      setProjects(user.projectsCreated);
    }
  }, [user]);

  const showStatusHistory = (id, project) => {
    setCurrentProject(project);
    setProjectId(id);
    setShowTrackContainer(true);
  };

  useEffect(() => {
    if (data && data.statusHistory) {
      setStatusHistory(data.statusHistory);
    }
  }, [data]);

  if (isLoading) {
    console.log("Loading status history...");
  }

  if (error) {
    console.error("Error fetching status history:", error);
  }

  const renderStatusBoxes = () => {
    const statuses = [
      "Initiated",
      "In Progress",
      "Review",
      "Completed",
      "Delivered",
    ];
    const completedStatuses = statusHistory.map((entry) => entry.status);

    return statuses.map((status, index) => (
      <React.Fragment key={status}>
        <div
          className={`status-box ${
            completedStatuses.includes(status) ? "status-completed" : ""
          }`}
        >
          <div className="status-circle"></div>
          <p className="status-text">{status}</p>
        </div>
        {index < statuses.length - 1 && (
          <div
            className={`vertical-line ${
              completedStatuses.includes(status) ? "lined-completed" : ""
            }`}
          ></div>
        )}
      </React.Fragment>
    ));
  };
  return (
    <div>
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
      <h1 style={{ marginLeft: "3rem", marginTop: "1rem" }}>Project Details</h1>
      <div className="balance-table-container">
        <div className="balance-table-item">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.projectName}</td>
                    <td>{project.status}</td>
                    <td>
                      <button
                        className="check-status-icon"
                        onClick={() => showStatusHistory(project._id, project)}
                      >
                        <i className="fa fa-check-circle status-icon"></i> Check
                        Status
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No projects found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div className="project-status">
        <h1>Track Your Project Status...</h1>
      </div>
      {showTrackContainer && currentProject && (
        <div className="track-container">
          <div className="track-item track1">
            <h2 className="project_name">
              Project Name:{" "}
              <span className="heading">{currentProject.projectName}</span>
            </h2>
            <div className="project_desc">
              <h2>
                Project description:
                <span>{currentProject.projectDescription}</span>
              </h2>
            </div>
          </div>
          <div className="track-item track2">
            <div className="status-container">{renderStatusBoxes()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTrack;
