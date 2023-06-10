import React, { useState, useEffect } from 'react'
import Trading from './trading_page/Trading.jsx'
import '../css/App.css'
import InitialPage from './initial_page/InitialPage.jsx';
import UserProfile from './user_profile/UserProfile.jsx';
// import controllers from '../backend/controllers'
import axios from 'axios';
import dns from 'dns'

import NavBarTemp from './containerTemplates/NavBarTemp.jsx';
import GraphNavTemp from './containerTemplates/GraphNavTemp.jsx';
import LeftColTemp from './containerTemplates/LeftColTemp.jsx';
import CryptoBuySellTemp from './containerTemplates/CryptoBuySellTemp.jsx';


function App(props) {
  // const addUser = async() =>{
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "Alan",
  //       middle: "Mathison",
  //       last: "Turing",
  //       born: 1912
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  const [view, setView] = useState("default");

  // const getUsers= async ()=> {
  //   try {
  //     const data = await controllers.getUsers();
  //     console.log(data);
  //   } catch (err){
  //     console.log(err);
  //   }
  // }

  const testAPI = async ()=> {
    try {
      // const data = await fetch('https://cryptopanic.com/api/v1/posts/?auth_token=eacbe41187c73aa0ba4a806774a1f04cac9341d8&kind=news&filter=hot&public=true')
      const data = await axios.get('/api')
      console.log(data.data);
    } catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    // getUsers();
  },[])

  const renderView = () => {
    switch (view) {
      case "default":
        return (
          <div>
            <InitialPage />
          </div>
        );
      case "trading":
        return (
          <div className="trading">
            <Trading setView={setView}/>
          </div>
        );
      case "user_profile":
        return (
          <div className="user_profile">
            <UserProfile setView={setView}/>
          </div>
        )
    }
  };

  return (
    <>

      <p>kkk</p>
      {/* <UserProfile /> */}
      {/* <NavBarTemp /> */}
      {/* <GraphNavTemp /> */}
      {/* <LeftColTemp /> */}
      <CryptoBuySellTemp />
      {renderView()}

    </>
  )

}

export default App;

