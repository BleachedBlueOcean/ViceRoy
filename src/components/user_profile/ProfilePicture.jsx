import React, {useState, useEffect} from 'react';
import {Avatar, IconButton, Typography} from '@mui/material';
import controllers from '../../backend/controllers/index.js'


const ProfilePicture = ({user, setUser, previewImage, setPreviewImage}) => {
  const [profileImage, setProfileImage] = useState(user.profilePic);
  // const [previewImage, setPreviewImage] = useState(user.profilePic);

  const handleSelection = (event) => {
    console.log('this is selection user', user)
    const file = event.target.files[0]
    setProfileImage(file)

    const reader = new FileReader();

    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePicClick = () => {
    document.getElementById('profile-picture-upload').click()
  };


  const updateDB = async () => {
    // console.log('pre form user', )
    const updatedUser = {...user, profilePic: previewImage}
    // console.log('db update', updatedUser)
    setUser(updatedUser);
    try {
      console.log('user id', updatedUser)
      await controllers.updateUser(updatedUser.id, updatedUser)
    }catch(err){
      console.log('this is profile pic error', err)
    }
  }

  useEffect(() => {
    // console.log('this is preview',  previewImage)
    updateDB()
  }, [previewImage])


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