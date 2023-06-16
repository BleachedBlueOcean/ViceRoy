/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useState, useEffect } from 'react';
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


const InitialPage = ({ handleOpen, handleClose, open, setView, setUser, setGuest, setSignedIn, setPreviewImage, onEmailChange, onPasswordChange, getUser, signInEmail, signInPassword, showEmailMessage, showPasswordMessage, showInvalidEmail, showMissingPass}) => {

    const guestLogin = async () => {
        const guestUser = await controllers.getUserById();
        console.log(guestUser)
        setGuest(true);
        setUser(guestUser);
        console.log(guestUser);
    }

  return (
    <Box className="initialpage" sx={{
      backgroundColor: '#32322C',
      width: '22rem',
      height: 'auto',
      minWidth: '16rem',
      maxHeight: '60vh',
      borderRadius: '12px',
      position: 'absolute',
      top: '38vh',
      left: '0vw',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography sx={{
        fontSize: '40px',
      }}>
        Login
      </Typography>
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        getUser(signInEmail, signInPassword);
      }}>
        <div>
          <InputLabel className="signInEmail" htmlFor="signInEmail" sx={{
            color: 'white',
          }}>
            Email:
          </InputLabel>
          <OutlinedInput id="signInEmail" type="text" placeholder="E-mail" onChange={onEmailChange} data-testid="emailField"/>
        </div>
        {showEmailMessage && (<div className="error" data-testid="invalidEmail">Invalid E-Mail Address</div>)}
        {showInvalidEmail && (<div className="error">E-Mail Address Not Found</div>)}
        <div>
          <InputLabel htmlFor="signInPassword" sx={{
            color: 'white',
          }}>
            Password:
          </InputLabel>
          <OutlinedInput id="signInPassword" type="password" placeholder="Password" onChange={onPasswordChange} data-testid="passwordField"/>
        </div>
        <Box sx={{
          margin: '2rem',
        }}
        >
        {showMissingPass && (<div className="error">Invalid Password</div>)}
        {showPasswordMessage && (<div className="error">Incorrect Password</div>)}
          <Button className="loginButton" type="submit" variant="contained" data-testid="loginButton">Login</Button>
        </Box>
        <Box className="loginoptions">
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}>
            <Button className="registerButton" onClick={handleOpen}>Register</Button>
            <Button className="guest-login" onClick={guestLogin}>Guest Login</Button>
            </Box>
        </Box>
      </form>
      <Dialog open={open} aria-labelledby="dialog-title" sx={style}>
        <DialogTitle id="dialog-title">Register</DialogTitle>
        <Register getUser={getUser} handleClose={handleClose} setGuest={setGuest}/>
      </Dialog>
    </Box>
  );
}

export default InitialPage;
