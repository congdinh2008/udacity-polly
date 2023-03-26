import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import RouteURLs from "../constants/routeURLs";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.authedUser.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to={RouteURLs.LOGIN_URL} replace state={{path: location.pathname}} />;
};

export default ProtectedRoute;
