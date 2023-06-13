import React, { useState, useEffect } from 'react'
import Trading from './trading_page/Trading.jsx'
import '../css/App.css'
import InitialPage from './initial_page/InitialPage.jsx';
import UserProfile from './user_profile/UserProfile.jsx'

// import controllers from '../backend/controllers'
// import axios from 'axios';
// import dns from 'dns'


// import NavBarTemp from './containerTemplates/NavBarTemp.jsx';
// import GraphNavTemp from './containerTemplates/GraphNavTemp.jsx';
// import LeftColTemp from './containerTemplates/LeftColTemp.jsx';
// import CryptoBuySellTemp from './containerTemplates/CryptoBuySellTemp.jsx';

export const Context = React.createContext();

function App(props) {
  //will remove
  const [user, setUser] = useState({});

  const [view, setView] = useState("default");
  const [signedIn, setSignedIn] = useState(false);
  // const [user, setUser] = useState({});


  const getUsers= async ()=> {
    try {
      const data = await controllers.getAllUsers();
      // console.log(data);
      setUser(data[0])
    } catch (err){
      console.error(err);
    }
  }

  const getUserById= async (id)=> {
    try {
      const data = await controllers.getUserByID(id);
      // console.log(data);
    } catch (err){
      console.error(err);
    }
  }

  const addUser = async (obj) => {
    try{
      await controllers.createUser(obj)
    }catch(err){
      console.error(err);
    }
  }


  const updateUser= async (id,obj)=> {
    try {
      const data = await controllers.updateUser(id,obj);
      // console.log(data);
    } catch (err){
      console.error(err);
    }
  }
  const deleteUser = async (id) => {
    try {
      const data = await controllers.deleteUser(id);
      // console.log(data);
    } catch (err){
      console.log(err);
    }
  }


  const renderView = () => {
    switch (view) {
      case "default":
        return (
          <div>
            <InitialPage setView={setView} setUser={setUser} setSignedIn={setSignedIn}/>
          </div>
        );
      case "trading":
        return (
          <div className="trading">
            <Trading setView={setView} user={user} signedIn={signedIn}/>
          </div>
        );
      case "user_profile":
        return (
          <div className="user_profile">
            <UserProfile setView={setView} user={user} signedIn={signedIn}/>
          </div>
        )
    }
  };

  useEffect(()=>{
    if(signedIn === true){
      setView('trading');
      renderView();
    }
  },[signedIn])

  return (
    <>


      <p>ViceRoy</p>
      {/* will need to have access to use data via use state */}
      <UserProfile user={user} setUser={setUser}/>
      {/* <NavBarTemp /> */}
      {/* <GraphNavTemp /> */}
      {/* <LeftColTemp /> */}
      {/* <CryptoBuySellTemp /> */}
      {renderView()}

    </>
  )

}

export default App;

