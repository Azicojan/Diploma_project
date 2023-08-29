
//ProfilePhotoUpdate.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../styling/ProfilePhotoUpdate.css';

const ProfilePhotoUpdate = ({ username, onUpdatePhoto }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
    console.log(file);
  };

  const handlePhotoUpdate = async (e) => {
    e.preventDefault();

    if (!selectedPhoto) {
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('photo', selectedPhoto);
      formData.append('username', username);

  
      const response = await fetch('http://localhost:5000/update-profile-photo', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
        
        
        
        onUpdatePhoto(selectedPhoto);
        toast.success('Profile photo updated successfully');
        navigate('/');
       
      } else {
        toast.error('An error occurred while updating the profile photo');
      }
    } catch (error) {
      console.error('Error updating profile photo:', error);
      toast.error('An error occurred while updating the profile photo');
    }
  };
  

  return (
    <div className="profile-photo-update-container">
      <div className="profile-photo-form">
        <h2>Update Profile Photo</h2>
        <input type="file" name="photo" accept="image/*" onChange={handlePhotoChange} />
        <button type="button" onClick={handlePhotoUpdate}>Update Photo</button>
        
      </div>
      <div className="profile-photo-preview">
        {selectedPhoto && <img src={URL.createObjectURL(selectedPhoto)} alt="Selected" />}
      </div>
    </div>
  );
};

export default ProfilePhotoUpdate;

