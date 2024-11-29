import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setIsAuthorized(false);
      return;
    }

    if (user?.role !== "admin") {
      navigate("/login");
      setIsAuthorized(false);
      return;
    }

    setIsAuthorized(true);
  }, [navigate, token, user?.role]);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : null;
};

export default AdminProtected;
