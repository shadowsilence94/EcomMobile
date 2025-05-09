import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear admin authentication
    sessionStorage.removeItem('adminAuthenticated');
    
    // Redirect to login page
    navigate('/admin/login');
  }, [navigate]);

  return (
    <div className="container py-5 text-center">
      <p>Logging out...</p>
    </div>
  );
};

export default AdminLogout;