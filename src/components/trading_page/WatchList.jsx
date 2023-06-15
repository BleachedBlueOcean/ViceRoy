import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WatchEntry from './WatchEntry.jsx';
import { List, Divider, Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip, Select } from '@mui/material';
import controllers from '../../backend/controllers/index.js';

function WatchList ({coinOptions, user, setDynamicCoin, watched, setWatched}) {
  const [topcoins, setTopcoins] = useState([])
  // const [watched, setWatched] = useState(['BTC'])

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250,
      }
    }
  }

  const getTopCoins = () => {
    setTopcoins(coinOptions.map((coin) => coin[0]))
  }
  // const getWatched = () => {
  //   setWatched(user.watchList)
  // }
  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    console.log('value :', value);
    setWatched(value.slice(0, 10));
    // controllers.updateUser(user.id, {watchList: watched})
  }
  // useEffect(()=>{getWatched()}, [])
  useEffect(()=>{getTopCoins()}, [])

  return (
    <div style={{marginTop: '15px'}}onClick={()=>{console.log('watched :', watched, 'user :', user)}}>Watch List
      <FormControl sx={{ m: 1, width: 300, bgcolor: 'gray', borderRadius: '5px'}}>
        <InputLabel sx={{color: 'white'}} id='watch-list-label'>Watched Coins</InputLabel>
        <Select
          labelId = 'watch-list-label'
          id = 'watch-list-chip'
          defaultValue={watched[0] || ''}
          multiple
          sx={{color: 'black'}}
          value={watched.slice(0, 10)}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label='Watched Coins' sx={{bgcolor: 'black'}}/>}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, bgcolor: 'gray'}}>
              {selected.map((val) => (
                <Chip key={val} label={val.join(' ')} sx={{color: 'white', bgcolor: 'black'}}/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {coinOptions.map((coin) => (
            <MenuItem
              key={coin}
              value={coin}
              sx={{color: 'green', bgcolor: 'black'}}
            >
              {coin.join(' ')}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{backgroundColor: '#13C4A3', maxHeight: '300px', overflowY: 'auto', borderRadius: '10px'}}>
        {watched.map((watchedcoin) => <WatchEntry watchedcoin={watchedcoin} key={watchedcoin} setDynamicCoin={setDynamicCoin}/>)}
      </div>
    </div>
  );
};

export default WatchList;