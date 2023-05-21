import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  {
    user ? "" : confirm("Please Login before View the Details");
  }
  console.log(location);
  if (loading) {
    return (
      <>
        <p className=" text-red-600 text-center text-2xl mt-80">
          Loading......
        </p>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
