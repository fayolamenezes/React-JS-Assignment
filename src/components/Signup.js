import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/profile');
  };

  const asteriskStyle = { color: 'red', marginLeft: '3px' };

  return (
    <div className="app-container">
      <div className="page">
        <header className="page-header">
          Create your PopX account
        </header>
        <form
          className="profile-section"
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <label>
            Full Name
            <span style={asteriskStyle}>*</span>
            <input
              name="fullName"
              placeholder="Full Name"
              required
              value={form.fullName}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <span style={asteriskStyle}>*</span>
            <input
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address
            <span style={asteriskStyle}>*</span>
            <input
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <span style={asteriskStyle}>*</span>
            <input
              name="password"
              placeholder="Password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Company Name
            <input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
            />
          </label>

          <label style={{ marginTop: '12px', fontWeight: '600', fontSize: '14px', color: '#333', display: 'flex', alignItems: 'center' }}>
            Are you an Agency?
            <span style={asteriskStyle}>*</span>
          </label>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '6px',
              justifyContent: 'flex-start',
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                checked={form.isAgency === 'Yes'}
                onChange={handleChange}
                style={{ transform: 'scale(1.3)' }}
                required
              />
              Yes
            </label>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <input
                type="radio"
                name="isAgency"
                value="No"
                checked={form.isAgency === 'No'}
                onChange={handleChange}
                style={{ transform: 'scale(1.3)' }}
                required
              />
              No
            </label>
          </div>

          <button
            type="submit"
            className="create-account-btn"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
