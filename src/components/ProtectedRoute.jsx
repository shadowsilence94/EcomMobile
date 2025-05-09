import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    // Redirect to admin login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;