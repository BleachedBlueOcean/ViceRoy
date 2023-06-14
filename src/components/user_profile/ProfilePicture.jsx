import React, {useState, useEffect} from 'react';
import {Avatar, IconButton, Typography} from '@mui/material';
import controllers from '../../backend/controllers/index.js';
import imageCompression from 'browser-image-compression'
import axios from 'axios';


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

  // const updateDB = async () => {
  //   // console.log('pre form user', )
  //   const compressed = profileImage;
  //   const compressionOptions = {
  //     maxSizeMB: 1
  //   };
  //   // console.log('db update', updatedUser)
  //   try {
  //     const compFile = await imageCompression(compressed, compressionOptions)
  //     const updatedUser = {...user, profilePic: compFile}
  //     setUser(updatedUser);

  //     console.log('user object', typeof updatedUser.profilePic)
  //     // console.log('user id', updatedUser.id)
  //     await controllers.updateUser(updatedUser.id, updatedUser)
  //   }catch(err){
  //     console.log('this is profile pic error', err)
  //   }
  // }
  const updateDB = () => {
    const formData = new FormData();
    formData.append("file", profileImage);
    formData.append("upload_preset", "ebqmycin")

    axios.post("https://api.cloudinary.com/v1_1/doryckkpf/image/upload", formData)
    .then((response) => {
      const updatedUser = {...user, profilePic: response.data.secure_url}
      setUser(updatedUser)
      controllers.updateUser(updatedUser.id, updatedUser)
    })
    .catch((error) => {
      console.log('Profile pic error: ', error);
    })
  }

  useEffect(() => {
    if (profileImage) {
      updateDB()
    }
  }, [profileImage])

  return (
    <div>
      <input
        id="profile-picture-upload"
        type="file"
        accept="image/jpeg, image/png"
        style={{ display: 'none' }}
        onChange={handleSelection}
      />
      <IconButton onClick={handlePicClick}>
        <Avatar src={previewImage} alt="Profile Picture" sx={{width: 200, height: 200}}/>
      </IconButton>
      <Typography variant='subtitle2'>Click above to set profile picture</Typography>
      <Typography variant='h6'>
        {user.firstName} {user.lastName}
      </Typography>
    </div>
  );
}

export default ProfilePicture;