import React, {useState,useEffect}from 'react';
import { Box, Typography } from '@mui/material';
import OwnedCoinRow from './OwnedCoinRow';
import axios from 'axios'

const SelfCoins_Values = ({ ownedCoins, updateUnrealizedGains}) => {

  const [liveCoins, setLiveCoins] = useState(null)
  const getAPI = () => {
    const icons = [(ownedCoins).map(coin=>coin.icon)]
    axios(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${icons.join('')}&tsyms=USD`)
    .then((result) => {
      console.log('this is the api call', result.data);
      setLiveCoins(result.data);
    }).catch((err) => console.log('Did not get info from API', err))
  }

  useEffect(() => {
    console.log('making api call')
    getAPI();
  }, [])
  return (
    <>
      <Box>
        <Box>
          <Typography variant='h3'>Owned Coins</Typography>
        </Box>
        {liveCoins ? ownedCoins.map((coin, i) => <OwnedCoinRow key={i} coin={coin}
        liveValue={liveCoins[coin.icon].USD} updateUnrealizedGains={updateUnrealizedGains}/>) : <p>No Coin found</p>}
      </Box>
    </>
  );
}

export default SelfCoins_Values;