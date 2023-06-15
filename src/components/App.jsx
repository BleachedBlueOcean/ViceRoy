/* eslint-disable space-before-blocks */
import React, { useState, useEffect } from 'react';
import Trading from './trading_page/Trading.jsx';
import '../css/App.css';
import InitialPage from './initial_page/InitialPage.jsx';
import UserProfile from './user_profile/UserProfile.jsx';
import AccountTotal from './modals/AccountTotal.jsx';

// import controllers from '../backend/controllers'
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
          <div>
            <InitialPage setView={setView} setUser={setUser} setGuest={setGuest} setSignedIn={setSignedIn} setPreviewImage={setPreviewImage}/>
          </div>
      );
    case 'trading':
      return (
          <>
            <>
              <NavBarTemp signedIn={signedIn}
                setSignedIn={setSignedIn}
                user={user} previewImage={previewImage} setPreviewImage={setPreviewImage}
                setView={setView} guest={guest} setGuest={setGuest}
                setShowBadgesModal={setShowBadgesModal}
              />
            </>
            <div className="trading">
              <AccountTotal user={user} unrealizedGains={unrealizedGains}/>
            {/* <Trading setView={setView} user={user} signedIn={signedIn} setAccountTotal={setAccountTotal} unrealizedGains={unrealizedGains}/> */}
            <Trading setView={setView} user={user} signedIn={signedIn}/>
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
            setShowBadgesModal={setShowBadgesModal}/>
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

  // useEffect(() => {
  //   renderView()
  // }, [view])

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

