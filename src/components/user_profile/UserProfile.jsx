import React, {useState, useEffect} from 'react'; 
import HistoricalData from './HistoricalData.jsx'; 
import {Button} from '@mui/material' 
import axios from 'axios' 
import CompletedAchievements from './CompletedAchievements.jsx'; 
import ProfilePicture from './ProfilePicture.jsx'; 
import ResetAccount from './ResetAccount.jsx'; 
import SelfCoins_Values from './SelfCoins_Values.jsx'; 
import AccountTotal from '../modals/AccountTotal.jsx'; 


const UserProfile = ({user, setUser, previewImage, setPreviewImage, setShowBadgesModal, showBadgesModal, setView, unrealizedGains, setUnrealizedGains}) => { 

  const updateUnrealizedGains =  async (val)=>{    
    console.log('value calculated is', val); 
    const newVal = [...unrealizedGains, val]; 
    console.log('newVal', newVal) 
    await setUnrealizedGains((prevGain) => { 
      return [...prevGain, val] 
    });
  }

 
  return ( 
    <div style={{display: "flex"}}> 
      <div>  
        <ProfilePicture user={user} setUser={setUser} previewImage={previewImage} setPreviewImage={setPreviewImage}/> 
        <AccountTotal user={user} unrealizedGains={unrealizedGains}/> 
        <CompletedAchievements achievedBadges={user.achievements} setShowBadgesModal={setShowBadgesModal} showBadgesModal={showBadgesModal} />
      </div>  
      <div style={{display: 'inline'}}> 
        <Button variant="contained" color="primary" 
          onClick={() => setView('trading')}>Trading Page</Button> 
        <ResetAccount user={user} setUser={setUser} setUnrealizedGains={setUnrealizedGains}/>
     </div> 
        <HistoricalData user={user}/>
        <SelfCoins_Values ownedCoins={user.coinsOwned} updateUnrealizedGains={updateUnrealizedGains}/> 
    </div>
  );
}

export default UserProfile;