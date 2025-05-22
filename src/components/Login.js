import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/profile');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="app-container">
      <div className="page">
        <header className="page-header">
          Sign in to your PopX account
        </header>
        <div className="profile-section" style={{ paddingTop: 0, gap: '8px' }}>
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" style={{ marginTop: '20px' }}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
