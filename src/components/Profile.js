import React, { useEffect, useState } from 'react';
import profilePic from '../assets/profile.png'; // Adjust path as needed
import cameraIcon from '../assets/camera.png'; // Adjust path as needed

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="app-container">
        <div
          className="page"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
          No user data found.
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="page">
        <div className="page-header">Account Settings</div>

        <div className="profile-section">
          <div className="profile-top">
            <div className="profile-image-wrapper">
              <img src={profilePic} alt="avatar" className="profile-image" />
              <div className="camera-icon">
                <img src={cameraIcon} alt="camera" />
              </div>
            </div>

            <div className="profile-info">
              <div className="profile-name">{user.fullName}</div>
              <div className="profile-email">{user.email}</div>
            </div>
          </div>

          <div className="profile-bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
