import { useEffect, useState } from "react";
import { useGetProjectRegistrationQuery } from "../../../features/admin/adminApi";

const Registration = () => {
  const [projects, setProjects] = useState([]);
  const { data, error, isLoading } = useGetProjectRegistrationQuery();

  useEffect(() => {
    if (data && data.success) {
      setProjects(data.projects);
    } else if (data && !data.success) {
      console.error("Failed to fetch Project Registration data");
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      <div className="registration-page">
        <div className="parent-container">
          <h3>Welcome to Registration Table</h3>
          <div className="table-container">
            <h2 style={{ color: "#fff" }}>Registration Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Reg ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>College Name</th>
                  <th>Degree</th>
                  <th>Semester</th>
                  <th>Project Name</th>
                  <th>Project Description</th>
                  <th>Date Given</th>
                  <th>Deadline</th>
                  <th>Queries</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {project.firstname} {project.lastname}
                    </td>
                    <td>{project.email}</td>
                    <td>{project.mobileNumber}</td>
                    <td>{project.collegeName}</td>
                    <td>{project.degree}</td>
                    <td>{project.semester}</td>
                    <td>{project.projectName}</td>
                    <td>{project.projectDescription}</td>
                    <td>{new Date(project.dateGiven).toLocaleDateString()}</td>
                    <td>{new Date(project.deadline).toLocaleDateString()}</td>
                    <td>{project.queries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
