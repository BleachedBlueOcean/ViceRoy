import React, {useState} from 'react';
import HistoricalData from './HistoricalData.jsx';
import CompletedAchievements from './CompletedAchievements.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import ResetAccount from './ResetAccount.jsx';

import SefCoins_Values from './SelfCoins_Values.jsx';
import AccountTotal from '../modals/AccountTotal.jsx';


const UserProfile = ({user, setUser}) => {


  return (
    <div style={{display: "flex"}}>
      <ProfilePicture user={user} setUser={setUser}/>
      <AccountTotal user={user}/>
      {/* will ned to have access to user data via usestate */}
      {/* <p>{user.firstName}</p> */}
      <ResetAccount user={user} setUser={setUser}/>

      {/* <HistoricalData /> */}
      {/* <CompletedAchievements /> */}
      {/* <SelfCoins_Values /> */}
    </div>

  );
}

export default UserProfile;