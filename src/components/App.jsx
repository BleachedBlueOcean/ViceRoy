import React, { useState, useEffect } from 'react'
import Trading from './trading_page/Trading.jsx'
import '../css/App.css'
import InitialPage from './initial_page/InitialPage.jsx';
import UserProfile from './user_profile/UserProfile.jsx';
// import InitialPage from './initial_page/InitialPage.jsx';


import NavBarTemp from './containerTemplates/NavBarTemp.jsx';
function App(props) {

  const [view, setView] = useState("default");

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
      <UserProfile />
      <NavBarTemp />
      {renderView()}

    </>
  )

}

export default App;

