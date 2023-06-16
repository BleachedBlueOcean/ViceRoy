import React, {useState, useEffect} from 'react';
import HistoricalData from './HistoricalData.jsx';
import { Box, Button, Container } from '@mui/material';
import axios from 'axios';
import CompletedAchievements from './CompletedAchievements.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import ResetAccount from './ResetAccount.jsx';
import SelfCoins_Values from './SelfCoins_Values.jsx';
import AccountTotal from '../modals/AccountTotal.jsx';


const UserProfile = ({user, setUser, previewImage, setPreviewImage, setShowBadgesModal, showBadgesModal, setView, unrealizedGains, setUnrealizedGains}) => {

  const updateUnrealizedGains = async (val)=>{
    console.log('value calculated is', val);
    const newVal = [...unrealizedGains, val];
    console.log('newVal', newVal);
    await setUnrealizedGains((prevGain) => {
      return [...prevGain, val];
    });
  }


  return (
    <Container style={{
      display: 'flex',
      margin: 0
    }}>
      <div>
        <ProfilePicture user={user} setUser={setUser} previewImage={previewImage} setPreviewImage={setPreviewImage}/>
        <AccountTotal user={user} unrealizedGains={unrealizedGains}/>
        <CompletedAchievements achievedBadges={user.achievements} setShowBadgesModal={setShowBadgesModal} showBadgesModal={showBadgesModal} />
      </div>
      <div style={{display: 'inline', marginTop: '1rem'}}>
        <Button variant="contained" color="primary"
          onClick={() => setView('trading')}>Trading Page</Button>
     </div>
        <Box className="historicalAndOwned" sx={{
          display: 'flex',
          flexDirection: 'column',

          // display: flex;
          // flex-direction: column;
          // gap: 10rem;
        }}>
          <HistoricalData user={user}/>
          <SelfCoins_Values ownedCoins={user.coinsOwned} updateUnrealizedGains={updateUnrealizedGains}/>
        </Box>
        <ResetAccount user={user} setUser={setUser} setUnrealizedGains={setUnrealizedGains}/>
    </Container>
  );
};

export default UserProfile;