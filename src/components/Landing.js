import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div
        className="page"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '100vh',
          padding: '24px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 className="welcome-heading">Welcome to PopX</h2>
          <p className="welcome-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="primary" onClick={() => navigate('/signup')}>
            Create Account
          </button>
          <button className="secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
