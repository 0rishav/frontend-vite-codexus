import { useEffect, useState } from "react";
import toast from "react-hot-toast"
import { useGetAllUsersQuery } from "../../../features/api/userSlice";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newRole, setNewRole] = useState("");

  const { data, error, isLoading } = useGetAllUsersQuery();


  // Fetch user data
  useEffect(() => {
    if (data && data.success) {
      setUsers(data.users);
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

  // Open Modal
  const openModal = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewRole("");
  };

  // Update Role
  const handleRoleUpdate = async () => {
    if (!newRole.trim()) {
      alert("Please enter a valid role!");
      return;
    }

    try {
      const response = await fetch(
        `https://authentication-5ii5.onrender.com/api/v1/auth/user/role/${selectedUserId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: newRole }),
        }
      );
      const data = await response.json();

      if (data.success) {
        toast.success(data.message)
        closeModal();
        // Refresh user data
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === selectedUserId ? { ...user, role: newRole } : user
          )
        );
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Error Updating Role")
    }
  };
  return (
    <div>
      <div className="user-table-page">
        <div className="parent-container">
        <h3>Welcome to Internship Table</h3>
          <div className="table-container">
            <h2 style={{ color: "#fff" }}>User Table</h2>
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <i
                        className="fas fa-edit edit-icon"
                        onClick={() => openModal(user._id)}
                        tabIndex="0"
                        title="Update Role"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-close">
            <div className="editmodal">
              <div className="modal-content">
                <span className="close-btn" onClick={closeModal}>
                  ×
                </span>
                <h2>Edit User Role</h2>
                <input
                  type="text"
                  placeholder="Enter new role"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                />
                <button className="submit-btn" onClick={handleRoleUpdate}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
