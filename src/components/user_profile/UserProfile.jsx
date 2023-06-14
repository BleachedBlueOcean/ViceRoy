import React, {useState, useEffect} from 'react';
import HistoricalData from './HistoricalData.jsx';
import {Button} from '@mui/material'
import axios from 'axios'
import CompletedAchievements from './CompletedAchievements.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import ResetAccount from './ResetAccount.jsx';

import SelfCoins_Values from './SelfCoins_Values.jsx';
import AccountTotal from '../modals/AccountTotal.jsx';


const UserProfile = ({user, setUser, previewImage, setPreviewImage, setShowBadgesModal, showBadgesModal, setView}) => {

  const [unrealizedGains, setUnrealizedGains] = useState([]);
  
  const [coins, setCoins] = useState(null);

  const getAPI = () => {
    const icons = [(user.coinsOwned).map(coin=>coin.icon)]
    axios(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${icons.join('')}&tsyms=USD`)
    .then((result) => {
      console.log(result.data);
      setCoins(result.data);
    }).catch((err) => console.log('Did not get info from API', err))
  }

  useEffect(() => {
    getAPI();
    const interval = setInterval(() => {
      getAPI();
    }, 100000)
    return () => clearInterval(interval);
  }, [])


  return (
    <div style={{display: "flex"}}>
      <div>
      <ProfilePicture user={user} setUser={setUser} previewImage={previewImage} setPreviewImage={setPreviewImage}/>
      <AccountTotal user={user}/>
      <CompletedAchievements achievedBadges={user.achievements} setShowBadgesModal={setShowBadgesModal} showBadgesModal={showBadgesModal} />
      </div>
      <div style={{display: 'inline'}}>
      <Button variant="contained" color="primary"
        onClick={() => setView('trading')}>Trading Page</Button>
      <ResetAccount user={user} setUser={setUser}/>
      </div>
      <HistoricalData user={user}/>
      {coins? <SelfCoins_Values ownedCoins={user.coinsOwned} liveCoins={coins} unrealizedGains={unrealizedGains} setUnrealizedGains={setUnrealizedGains}/> : null} 
    </div>
  );
}

export default UserProfile;