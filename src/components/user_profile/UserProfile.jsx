import React from 'react';
import HistoricalData from './HistoricalData.jsx';
import CompletedAchievements from './CompletedAchievements.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import ResetAccount from './ResetAccount.jsx';
import SelfCoins_Values from './SelfCoins_Values.jsx'


const UserProfile = () => {

  return (
    <>
      <ProfilePicture />
      <ResetAccount />
      <HistoricalData />
      <CompletedAchievements />
      <SelfCoins_Values />
    </>
  );
}

export default UserProfile;