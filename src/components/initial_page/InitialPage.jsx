/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useState } from 'react';
import Register from '../modals/Register.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { OutlinedInput } from '@mui/material';
import controllers from '../../backend/controllers/index.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  bgcolor: 'rgba(0, 0, 0, .1)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function InitialPage({setView, setUser, setGuest, setSignedIn, setPreviewImage}) {
    const [open, setOpen] = useState(false);
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };
  // send get/post request to database with user details
  // if login user matches, set view to trading
  // else return message that login doesnt match any account in database


  const getUser = async (signInEmail, signInPassword) => {
      try {
          const userData = await controllers.getUser(signInEmail, signInPassword);
          if(!userData.code){
              setSignedIn(true);
              setUser(userData);
              setPreviewImage(userData.profilePic);
          }
          console.log('User Data: ', userData);
      } catch(error) {
          setSignedIn(false);
          console.log(error);
      }
  }



    // const guestUser = {
    //     uid: null,
    //     firstName: 'Guest',
    //     lastName: null,
    //     email: null,
    //     totalAssets: null,
    //     coinsOwned: null
    // }

    const guestLogin = async () => {
        const guestUser = await controllers.getUserById();
        console.log(guestUser)
        setGuest(true);
        setUser(guestUser);
        console.log(guestUser);
    }

  return (
    <Box className="initialpage">
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        getUser(signInEmail, signInPassword);
      }}>
        <div>
          <InputLabel htmlFor="signInEmail">Email:</InputLabel>
          <OutlinedInput id="signInEmail" type="text" placeholder="E-mail" onChange={onEmailChange} />
        </div>
        <div>
          <InputLabel htmlFor="signInPassword">Password:</InputLabel>
          <OutlinedInput id="signInPassword" type="password" placeholder="Password" onChange={onPasswordChange} />
        </div>
        <div>
          <Button className="loginButton" type="submit" variant="contained">Login</Button>
        </div>
        <div className="loginoptions">
          <Button className="registerButton" onClick={handleOpen}>Register</Button>
          <Typography> or </Typography>
          <Button className="guest-login" onClick={guestLogin}>Continue as Guest</Button>
        </div>
      </form>
      <Dialog open={open} aria-labelledby="dialog-title" sx={style}>
        <DialogTitle id="dialog-title">Register</DialogTitle>
        <Register getUser={getUser} handleClose={handleClose} />
        {/* <Box>
        </Box> */}
      </Dialog>
    </Box>
  );
};

export default InitialPage;
