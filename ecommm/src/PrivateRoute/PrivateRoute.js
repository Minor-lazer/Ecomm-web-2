import React from "react";
import { useAuth } from "../../src/Context/AuthContext.js";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ path, ...props }) {
  const { isLogin } = useAuth();

  return isLogin ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
