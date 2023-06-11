import React, {useState} from 'react';
import { Button, Card, CardMedia } from '@mui/material';

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('this is submit', e.target)
    // console.log('this is submit', e)
    //TODO db call to upload image
  }

  const handleSelection = (event) => {
    console.log('target', event.target.files[0])
    const file = event.target.files[0]
    setProfileImage(file)
    const reader = new FileReader();

    reader.onload = (e) => {
      setPreviewImage(e.target.result);
      // console.log('target value', e.target.result)
    };
    reader.readAsDataURL(file);
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file"
          accept="image/png, image/jpeg"
          onChange={handleSelection}/>
        {
          previewImage && (
            <Card sx={{maxWidth: 400, maxHeight: 400, margin: '16px auto'}}>
              <CardMedia component="img" height="200" image={previewImage} alt="Preview" />
            </Card>
          )
        }
        <Button type="submit">Upload</Button>
      </form>
    </>
  );
}

export default ProfilePicture;