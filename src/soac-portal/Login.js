import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/soac-portal/login', { 
        email, 
        password 
      });
      
      // Store user data in localStorage
      localStorage.setItem('socAuthToken', response.data.token);
      localStorage.setItem('socRole', response.data.role);
      localStorage.setItem('socUserEmail', response.data.email);
      localStorage.setItem('socUserId', response.data.userId);
      
      // If user is society admin, store society info
      if (response.data.role === 'soc_admin') {
        localStorage.setItem('socSocietyId', response.data.societyId);
        localStorage.setItem('socSocietyName', response.data.societyName);
        localStorage.setItem('socSocietySlug', response.data.societySlug);
      }
      
      // Redirect based on role
      if (response.data.role === 'super_admin') {
        history.push('/soac-portal/super-admin');
      } else {
        history.push('/soac-portal/soc-admin');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Login failed. Please check your credentials and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/testAssets/tsg-logo.png" alt="TSG Logo" className="tsg-logo" />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;