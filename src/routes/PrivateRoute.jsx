import useAuthContext from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth/signin" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
