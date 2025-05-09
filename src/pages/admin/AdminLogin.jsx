import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Admin credentials
  const ADMIN_USERNAME = 'htutkoko';
  const ADMIN_PASSWORD = '095506981';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Store admin authentication in session storage
      sessionStorage.setItem('adminAuthenticated', 'true');
      // Redirect to admin products page
      navigate('/admin/products');
    } else {
      setError('Invalid username or password');
    }
  };

  const textColor = theme === 'dark' ? '#f0f0f0' : '#212529';
  const bgColor = theme === 'dark' ? '#333' : '#fff';
  const inputBgColor = theme === 'dark' ? '#444' : '#fff';
  const inputTextColor = theme === 'dark' ? '#f0f0f0' : '#212529';
  const borderColor = theme === 'dark' ? '#555' : '#ced4da';

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card" style={{ backgroundColor: bgColor, borderColor }}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{ color: textColor }}>Admin Login</h2>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label" style={{ color: textColor }}>
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label" style={{ color: textColor }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
                  />
                </div>
                
                <button type="submit" className="btn btn-tech-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;