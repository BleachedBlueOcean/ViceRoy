import React, {useState,useEffect}from 'react';
import { Box, Typography } from '@mui/material';
import OwnedCoinRow from './OwnedCoinRow';

const SelfCoins_Values = ({ ownedCoins, liveCoins, setUnrealizedGains, unrealizedGains }) => {

  useEffect(()=>{
  }, [])
  
  return (
    <Box>
      <Box>
        <Typography variant='h3'>Owned Coins</Typography>
      </Box>
      {ownedCoins.map((coin, i) => <OwnedCoinRow key={i} coin={coin} 
      unrealizedGains={unrealizedGains} liveValue={liveCoins[coin.icon].USD}
      setUnrealizedGains={setUnrealizedGains}/>)}
    </Box>
  );
}

export default SelfCoins_Values;