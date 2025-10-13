import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';

const ProtectedRoute = ({ children, namespace }) => {
  const token = getToken(namespace);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
