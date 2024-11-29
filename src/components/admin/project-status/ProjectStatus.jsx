import { useEffect, useState } from "react";
import "./project-status.css";
import { useGetProjectDetailsQuery, useUpdateProjectStatusMutation } from "../../../features/admin/adminApi";
import toast from "react-hot-toast"

const ProjectStatus = () => {
  const { data, error, isLoading } = useGetProjectDetailsQuery();
  const [updateProject, { isLoading: isUpdating, error: updateError }] = useUpdateProjectStatusMutation();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data && data.success) {
      setProjects(data.projects);
    } else if (data && !data.success) {
      console.error("Failed to fetch internship data");
    }
  }, [data, isLoading, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  // Update project status
  const updateProjectStatus = async (projectId,e) => {
    e.preventDefault()
    try {
      const response = await updateProject(projectId).unwrap();
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === projectId ? { ...project, status: response.project.status } : project
        )
      );
      toast.success(`Project status updated to ${response.project.status}`);
    } catch (error) {
      toast.error(error.message || "Failed to update status");
    }
  };

  if (isUpdating) {
    return <div>Loading...</div>;
  }

  if (updateError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      <div className="track-project">
        <h1>Progress Bar</h1>
        <div className="parent-container">
          <div className="grid-progress">
            <div className="progress-container">
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project._id} className="progress-item">
                    <div className="project-name">{project.projectName}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.completionPercentage}%` }}
                      >
                        {project.completionPercentage}%
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No projects available</p>
              )}
            </div>
          </div>
        </div>

        <h1 className="status">Project Status</h1>
        <div className="parent-container" style={{margin:"40px 0px"}}>
          <div className="table-container">
            <h2 style={{ color: "#fff" }}>Project Table</h2>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Project Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(projects) && projects.length > 0 ? (
                  projects.map((project) => (
                    <tr key={project._id}>
                      <td>{project.firstname}</td>
                      <td>{project.lastname}</td>
                      <td>{project.email}</td>
                      <td>{project.projectName}</td>
                      <td>{project.status}</td>
                      <td>
                        <span
                          className="update-icon"
                          title="Update Status"
                          onClick={(e) => updateProjectStatus(project._id,e)}
                          style={{ cursor: "pointer" }}
                        >
                          📝
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No projects available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
