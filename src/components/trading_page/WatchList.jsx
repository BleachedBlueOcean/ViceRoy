import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WatchEntry from './WatchEntry.jsx';
import { List, Divider, Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip, Select } from '@mui/material';
import LeftColTemp from '../containerTemplates/LeftColTemp.jsx'


function WatchList () {
  const [topcoins, setTopcoins] = useState([])
  const [watched, setWatched] = useState(['BTC'])

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250,
      }
    }
  }
  const getTopCoins = () => {
    return axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USD')
      .then((result) => {setTopcoins(result.data.Data.map((coin) => coin.CoinInfo.Name))})
      .catch((err) => {console.log('top coin err: ', err)})
  }
  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    console.log('value :', value)
      setWatched(value.slice(0,10));
  }

  useEffect(()=>{getTopCoins()}, [])
  return (
    <div style={{marginTop: '15px'}}onClick={()=>{console.log('top coins: ', topcoins, 'watched :', watched)}}>Watch List
      <FormControl sx={{ m: 1, width: 300, bgcolor: 'gray', borderRadius: '5px'}}>
        <InputLabel sx={{color: 'white'}} id='watch-list-label'>Watched Coins</InputLabel>
        <Select
          labelId = 'watch-list-label'
          id = 'watch-list-chip'
          multiple
          sx={{color: 'black'}}
          value={watched.slice(0, 10)}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label='Watched Coins' sx={{bgcolor: 'black'}}/>}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, bgcolor: 'gray'}}>
              {selected.map((val) => (
                <Chip key={val} label={val} sx={{color: 'white', bgcolor: 'black'}}/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {topcoins.map((coin) => (
            <MenuItem
              key={coin}
              value={coin}
              sx={{color: 'green', bgcolor: 'black'}}
            >
              {coin}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        {watched.map((watchedcoin) => <WatchEntry coinname={watchedcoin} key={watchedcoin}/>)}
      </div>
    </div>
  )
}

export default WatchList