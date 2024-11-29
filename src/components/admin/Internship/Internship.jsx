import { useEffect, useState } from "react";
import { useGetInternshipRegistrationQuery } from "../../../features/admin/adminApi";

const Internship = () => {
  const [registrations, setRegistrations] = useState([]);
  const { data, error, isLoading } = useGetInternshipRegistrationQuery();

  useEffect(() => {
   
    if (data && data.success) {
      setRegistrations(data.registrations); 
    } else if (data && !data.success) {
      console.error("Failed to fetch internship data");
    }
  }, [data,isLoading,error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <div className="parent-container">
        <h3>Welcome to Internship Table</h3>
        <div className="table-container">
          <h2 style={{ color: "#fff" }}>Internship Table</h2>
          <table>
            <thead>
              <tr>
                <th>Reg ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Intern Field</th>
                <th>Availability</th>
                <th>Skills</th>
                <th>Project Desc</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <tr key={registration._id}>
                  <td>{registration._id}</td>
                  <td>{registration.firstname}</td>
                  <td>{registration.lastname}</td>
                  <td>{registration.email}</td>
                  <td>{registration.mobileNumber}</td>
                  <td>{registration.internshipField}</td>
                  <td>{registration.availability}</td>
                  <td>{registration.skills}</td>
                  <td className="project-desc">
                    {registration.projectDescription}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Internship;
