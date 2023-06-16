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
      margin: 0,
      width: '100%',
    }} data-testid="userProfile">
      <div className="=userLeftCol" style={{minWidth: '16vw'}}>
        <ProfilePicture user={user} setUser={setUser} previewImage={previewImage} setPreviewImage={setPreviewImage}/>
        <AccountTotal user={user} unrealizedGains={unrealizedGains}/>
        <CompletedAchievements achievedBadges={1} setShowBadgesModal={setShowBadgesModal} showBadgesModal={showBadgesModal} />
      </div>
      <div style={{display: 'inline', marginTop: '1rem', position: 'absolute', left: '22rem'}}>
        <Button variant="contained" color="primary"
          onClick={() => setView('trading')}>Trading Page</Button>
     </div>
        <Box className="historicalAndOwned" sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minWidth: '80vw'
        }}>
          <HistoricalData user={user}/>
          <SelfCoins_Values ownedCoins={user.coinsOwned} updateUnrealizedGains={updateUnrealizedGains}/>
        </Box>
        <ResetAccount className="resetAccount" user={user} setUser={setUser} setUnrealizedGains={setUnrealizedGains} />
    </Container>
  );
};

export default UserProfile;