import React, {useState} from 'react';
import {Avatar, IconButton, Typography} from '@mui/material';


const ProfilePicture = ({user, setUser}) => {
  const [profileImage, setProfileImage] = useState(user.profilePic);
  const [previewImage, setPreviewImage] = useState(user.profilePic);

  const updatedUser = {...user, profilePic: {profileImage}}
  const handleSelection = (event) => {
    // console.log('target', event.target.files[0])
    const file = event.target.files[0]
    setProfileImage(file)
    setUser(updatedUser)

    const reader = new FileReader();

    reader.onload = (e) => {
      // console.log(profileImage)
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePicClick = () => {
    document.getElementById('profile-picture-upload').click()
  };

  return (
    <div>
      <input
        id="profile-picture-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleSelection}
      />
      <IconButton onClick={handlePicClick}>
        <Avatar src={previewImage} alt="Profile Picture" sx={{width: 200, height: 200}}/>
      </IconButton>
      <Typography>Click above to set profile picture</Typography>
    </div>
  );
}

export default ProfilePicture;