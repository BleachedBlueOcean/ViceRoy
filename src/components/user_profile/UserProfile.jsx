import React, {useState} from 'react';
import HistoricalData from './HistoricalData.jsx';
import CompletedAchievements from './CompletedAchievements.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import ResetAccount from './ResetAccount.jsx';

import SefCoins_Values from './SelfCoins_Values.jsx'


const UserProfile = () => {



  return (
    <div style={{display: "flex"}}>
      <ProfilePicture />
      <ResetAccount />

      {/* <HistoricalData /> */}
      {/* <CompletedAchievements /> */}
      {/* <SelfCoins_Values /> */}
    </div>

  );
}

export default UserProfile;