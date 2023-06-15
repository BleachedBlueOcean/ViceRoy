/* eslint-disable space-before-blocks */
import React, { useState, useEffect } from 'react';
import Trading from './trading_page/Trading.jsx';
import '../css/App.css';
import InitialPage from './initial_page/InitialPage.jsx';
import UserProfile from './user_profile/UserProfile.jsx';
import AccountTotal from './modals/AccountTotal.jsx';
import { Box, Typography } from '@mui/material';

import controllers from '../backend/controllers'
// import axios from 'axios';
// import dns from 'dns'

import NavBarTemp from './containerTemplates/NavBarTemp.jsx';
import GraphNavTemp from './containerTemplates/GraphNavTemp.jsx';
import CryptoBuySellTemp from './containerTemplates/CryptoBuySellTemp.jsx';

export const Context = React.createContext();
// import global theme
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

const App = (props) => {
  //will remove
  const [user, setUser] = useState({});
  const [view, setView] = useState('default');
  const [signedIn, setSignedIn] = useState(false);
  const [guest, setGuest] = useState(false);
  const [previewImage, setPreviewImage] = useState(user.profilePic);
  const [showBadgesModal, setShowBadgesModal] = useState(false);
  const [unrealizedGains, setUnrealizedGains] = useState([]);
  const [open, setOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const [showMissingPass, setShowMissingPass] = useState(false);
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);

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
  const getUser = async (signInEmail, signInPassword) => {
    try {
        const userData = await controllers.getUser(signInEmail, signInPassword);
        if (userData.code === 'auth/invalid-email') {
          setShowEmailMessage(true);
          setShowInvalidEmail(false);
          setShowPasswordMessage(false);
          setShowMissingPass(false);
        }
        if (userData.code === 'auth/user-not-found') {
          setShowEmailMessage(false);
          setShowInvalidEmail(true);
          setShowPasswordMessage(false);
          setShowMissingPass(true);
        }
        if (userData.code === 'auth/missing-password') {
          setShowEmailMessage(false);
          setShowInvalidEmail(false);
          setShowMissingPass(true);
          setShowPasswordMessage(false);
        }
        if (userData.code === 'auth/wrong-password') {
          setShowEmailMessage(false);
          setShowMissingPass(false);
          setShowInvalidEmail(false);
          setShowPasswordMessage(true);
        }
        if(!userData.code){
            setSignedIn(true);
            setUser(userData);
            setPreviewImage(userData.profilePic);
            setShowEmailMessage(false);
            setShowMissingPass(false);
            setShowPasswordMessage(false);
            setShowInvalidEmail(false);
        }
        console.log('User Data: ', userData);
    } catch(error) {
        setSignedIn(false);
        console.log('error signing in: ', error);
    }
}

  const getUsers = async () => {
    try {
      const data = await controllers.getAllUsers();
      // console.log(data);
      setUser(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const getUserById = async (id) => {
    try {
      const data = await controllers.getUserByID(id);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addUser = async (obj) => {
    try {
      await controllers.createUser(obj);
    } catch (err) {
      console.error(err);
    }
  };

  const updateUser = async (id, obj) => {
    try {
      const data = await controllers.updateUser(id, obj);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteUser = async (id) => {
    try {
      const data = await controllers.deleteUser(id);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };


  const renderView = () => {
    console.log('rendered!', view);
    switch (view) {
    case 'default':
      return (
          <Box
            sx={{
              backgroundImage: 'url("img/loginpage.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '102.6vh',
            }}
          >
            <p className="login-page-title">
              ViceRoy
            </p>
            <Box sx={{
              position: 'relative',
              display: 'flex',
              objectFit: 'contain',
              height: '50vh',
              width: '22vw',
              left: '40vw',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <Box component="img" sx={{
                position: 'absolute',
                height: '100%',
                width: 'auto',
              }} alt="ViceRoy Website Logo" src="icons/logo.png" />
              <InitialPage open={open} handleOpen={handleOpen} handleClose={handleClose} setView={setView} setUser={setUser} setGuest={setGuest} setSignedIn={setSignedIn} setPreviewImage={setPreviewImage} onEmailChange={onEmailChange} onPasswordChange={onPasswordChange} getUser={getUser} signInEmail={signInEmail} signInPassword={signInPassword} showEmailMessage={showEmailMessage} showPasswordMessage={showPasswordMessage} showInvalidEmail={showInvalidEmail} showMissingPass={showMissingPass}/>
            </Box>
          </Box>
      );
    case 'trading':
      return (
          <>
            <>
              <NavBarTemp signedIn={signedIn}
                setSignedIn={setSignedIn}
                user={user} previewImage={previewImage} setPreviewImage={setPreviewImage}
                setView={setView} guest={guest} setGuest={setGuest}
                setShowBadgesModal={setShowBadgesModal} open={open} handleOpen={handleOpen} handleClose={handleClose} getUser={getUser}
              />
            </>
            <div className="trading">
              <AccountTotal user={user} unrealizedGains={unrealizedGains}/>
              <Trading setView={setView} user={user} signedIn={signedIn} guest={guest}/>
            </div>
          </>
      );
      case "user_profile":
        return (
        <>
          <NavBarTemp signedIn={signedIn}
            setSignedIn={setSignedIn}
            user={user} previewImage={previewImage} setPreviewImage={setPreviewImage}
            setView={setView} setGuest={setGuest}
            setShowBadgesModal={setShowBadgesModal} open={open} handleOpen={handleOpen} handleClose={handleClose} getUser={getUser}
            />
          <div className="user_profile">
            <AccountTotal user={user} unrealizedGains={unrealizedGains}/>
            <UserProfile setView={setView} user={user} setUser={setUser} signedIn={signedIn} previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            showBadgesModal={showBadgesModal}
            setShowBadgesModal={setShowBadgesModal} unrealizedGains={unrealizedGains} setUnrealizedGains={setUnrealizedGains}/>

          </div>
        </>
        )
    }
  };


  useEffect(()=>{
    if(signedIn){
      setView('user_profile');
    } else if(guest) {
      setView('trading')
    }
  },[signedIn, guest])



  return (
    <ThemeProvider theme={theme}>
      {renderView()}
    </ThemeProvider>
  );

};

export default App;

