
//UserAvatar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/UserAvatar.css';



const UserAvatar = ({ loggedIn, username, onLogout, selectedPhoto }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowDropdown(false); // Close the dropdown
    onLogout(); // Call the logout handler
  };

 // console.log(selectedPhoto);
  


  return (
    <div className="user-avatar" onClick={handleDropdownToggle}>

<div className="user-avatar">
  {selectedPhoto === null || selectedPhoto === "" ? (
    // For both logged-in and logged-out users without an updated photo
    <div className="avatar-placeholder">{username.charAt(0)}</div>
  ) : (
    // For logged-in users with an updated photo
    <img
      src={
        typeof selectedPhoto === "object"
          ? URL.createObjectURL(selectedPhoto)
          : `${process.env.PUBLIC_URL}/uploads/${selectedPhoto}`
      }
      alt={`${username}'s avatar`}
      style={{
        width: 40,
        height: 40,
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    />
  )}
</div>


      
        {showDropdown && loggedIn && (
        <div className="dropdown">
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
