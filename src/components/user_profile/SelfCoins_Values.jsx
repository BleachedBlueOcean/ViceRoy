import React, {useState,useEffect}from 'react';
import { Box, Typography } from '@mui/material';
import OwnedCoinRow from './OwnedCoinRow';
import axios from 'axios';

const SelfCoins_Values = ({ ownedCoins, updateUnrealizedGains}) => {

  const [liveCoins, setLiveCoins] = useState(null);
  const getAPI = () => {

    const icons = [(ownedCoins).map(coin=>coin.icon)]
    // const icons = ownedCoins.filter(coin=>coin.quantity>0)
      // .map(coin=>coin.icon)
    // const icons = [(ownedCoins).map((coin) => {
    //   if(coin.quantity > 0){
    //   return coin.icon
    //   }
    // })];
    // console.log('TESTINGGGGG', ownedCoins)
    // console.log('TESTINGGGGG', tester)

    axios(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${icons.join('')}&tsyms=USD`)
    .then((result) => {
      // console.log('this is the api call', result.data);
      setLiveCoins(result.data);
    }).catch((err) => console.log('Did not get info from API', err));
  };

  useEffect(() => {
    // console.log('making api call');
    getAPI();
    const interval = setInterval(() => {
      getAPI();
    }, 100000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <Box>
        <Box>
          <Typography variant='h3'>Owned Coins</Typography>
        </Box>
        <Box className="ownedCoins" sx={{
          backgroundColor: '#13C4A3',
          margin: '1rem 1rem',
          padding: '1rem',
          borderRadius: '1rem',
        }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
          }}>
          <Typography variant='body1' sx={{fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>ICON</Typography>
          <Typography variant='body1' sx={{fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>NAME</Typography>
          <Typography variant='body1' sx={{fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>QTY</Typography>
          <Typography variant='body1' sx={{fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>Avg Buy Value</Typography>
          <Typography variant='body1' sx={{fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>Live Value</Typography>
          <Typography variant='body1' sx={{fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>Final Value</Typography>
        </Box>
          {liveCoins ? ownedCoins.map((coin, i) => <OwnedCoinRow key={i} coin={coin} liveValue={liveCoins[coin.icon].USD}
            updateUnrealizedGains={updateUnrealizedGains}/>)
          : <p>No Coin found</p>}
        </Box>
      </Box>
    </>
  );
};

export default SelfCoins_Values;
/*
  shrink news section
    50% vertical
  smaller myapp bar
  align account summary
  buy/sell outside
  everything visible in screen
  make left side sticky
*/