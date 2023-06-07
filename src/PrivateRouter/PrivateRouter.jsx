import { Navigate, useLocation } from "react-router-dom";
// import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <button className="btn loading">loading</button>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;