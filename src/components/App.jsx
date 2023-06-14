/* eslint-disable space-before-blocks */
import React, { useState, useEffect } from 'react'
import Trading from './trading_page/Trading.jsx'
import '../css/App.css'
import InitialPage from './initial_page/InitialPage.jsx';
import UserProfile from './user_profile/UserProfile.jsx'

// import controllers from '../backend/controllers'
// import axios from 'axios';
// import dns from 'dns'

import NavBarTemp from './containerTemplates/NavBarTemp.jsx';
import LeftColTemp from './containerTemplates/LeftColTemp.jsx'
// import GraphNavTemp from './containerTemplates/GraphNavTemp.jsx';
// import LeftColTemp from './containerTemplates/LeftColTemp.jsx';
// import CryptoBuySellTemp from './containerTemplates/CryptoBuySellTemp.jsx';

<<<<<<< HEAD
export const Context = React.createContext();
=======
// import global theme
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
>>>>>>> globalStyles

function App(props) {
  //will remove
  const [user, setUser] = useState({});
  const [view, setView] = useState("default");
  const [signedIn, setSignedIn] = useState(false);

  const [previewImage, setPreviewImage] = useState(user.profilePic);
  const [showBadgesModal, setShowBadgesModal] = useState(false);

  const getUsers = async () => {
    try {
<<<<<<< HEAD
      const data = await controllers.getAllUsers();
      // console.log(data);
      setUser(data[0])
    } catch (err){
=======
      const data = await controllers.getUsers();
      console.log(data);
    } catch (err) {
>>>>>>> globalStyles
      console.error(err);
    }
  }

  const getUserById = async (id) => {
    try {
      const data = await controllers.getUserByID(id);
<<<<<<< HEAD
      // console.log(data);
    } catch (err){
=======
      console.log(data);
    } catch (err) {
>>>>>>> globalStyles
      console.error(err);
    }
  }

  const addUser = async (obj) => {
    try {
      await controllers.createUser(obj)
    } catch (err) {
      console.error(err);
    }
  }

<<<<<<< HEAD
  const updateUser= async (id,obj)=> {
    try {
      const data = await controllers.updateUser(id,obj);
      // console.log(data);
    } catch (err){
=======

  const updateUser = async (id, obj) => {
    try {
      const data = await controllers.updateUser(id, obj);
      console.log(data);
    } catch (err) {
>>>>>>> globalStyles
      console.error(err);
    }
  }
  const deleteUser = async (id) => {
    try {
      const data = await controllers.deleteUser(id);
<<<<<<< HEAD
      // console.log(data);
    } catch (err){
=======
      console.log(data);
    } catch (err) {
>>>>>>> globalStyles
      console.log(err);
    }
  }

<<<<<<< HEAD
=======
  useEffect(() => { }, [])
>>>>>>> globalStyles

  const renderView = () => {
    switch (view) {
      case "default":
        return (
          <div>
            <InitialPage setView={setView} setUser={setUser} setSignedIn={setSignedIn} setPreviewImage={setPreviewImage}/>
          </div>
        );
      case "trading":
        return (
<<<<<<< HEAD
          <>
          <>
            <NavBarTemp signedIn={signedIn}
            setSignedIn={setSignedIn}
            user={user} previewImage={previewImage} setPreviewImage={setPreviewImage}
            setView={setView}
            setShowBadgesModal={setShowBadgesModal}
            />
            <LeftColTemp user={user}/>
          </>
            <div className="trading">
              <Trading setView={setView} user={user} signedIn={signedIn}/>
            </div>
          </>
=======
          <div className="trading">
            <Trading setView={setView} />
          </div>
>>>>>>> globalStyles
        );
      case 'user_profile':
        return (
        <>
          <NavBarTemp signedIn={signedIn}
            setSignedIn={setSignedIn}
            user={user} previewImage={previewImage} setPreviewImage={setPreviewImage}
            setView={setView}
            setShowBadgesModal={setShowBadgesModal}
          />
          <LeftColTemp user={user}/>
          <div className="user_profile">
<<<<<<< HEAD
            <UserProfile setView={setView} user={user} signedIn={signedIn} previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            showBadgesModal={showBadgesModal}
            setShowBadgesModal={setShowBadgesModal}/>
=======
            <UserProfile setView={setView} />
>>>>>>> globalStyles
          </div>
        </>
        )
    }
  };

  useEffect(()=>{
    if(signedIn === true){
      setView('trading');
    } else {
      console.log('signed in use effect triggered')
      setView('default');
    }
    renderView();
  },[signedIn, view])


  return (
    <ThemeProvider theme={theme}>

<<<<<<< HEAD
      {/* <p>ViceRoy</p> */}
      {/* will need to have access to use data via use state */}
      {/* <UserProfile user={user} setUser={setUser}
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        setShowBadgesModal={setShowBadgesModal} showBadgesModal={showBadgesModal} /> */}
=======
      <p>ViceRoy</p>
      <UserProfile />
      {/* <NavBarTemp /> */}
>>>>>>> globalStyles
      {/* <GraphNavTemp /> */}
      {/* <LeftColTemp /> */}
      {/* <CryptoBuySellTemp /> */}

      {renderView()}

    </ThemeProvider>
  )

}

export default App;

