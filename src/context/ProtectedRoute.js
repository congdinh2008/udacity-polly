import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.authedUser.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
