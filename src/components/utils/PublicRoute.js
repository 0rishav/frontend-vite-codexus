import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token && location.pathname === "/login") {
      navigate(-1); 
    }
  }, [token, navigate, location]);

  return !token || location.pathname !== "/login" ? children : null;
};

export default PublicRoute;
