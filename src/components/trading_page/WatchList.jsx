import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WatchEntry from './WatchEntry.jsx';
import { List, Divider, Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip, Select } from '@mui/material';
import controllers from '../../backend/controllers/index.js';

function WatchList ({coinOptions, user, setDynamicCoin, watched, setWatched}) {
  const [topcoins, setTopcoins] = useState([])
  const [open, setOpen] = useState(false)

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250,
      }
    }
  }
  const [selected, setSelected] = useState([])
  const handleSelected = () => {
    setSelected(
      watched.map((watch) => (`${watch[0]} ${watch[1]}`))
    )
  }

  useEffect(()=> handleSelected(), [watched])

  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    // setWatched(value.slice(0, 10));
    // console.log(value)
    setWatched(value.map((val) => val.match(/^(\S+)\s(.*)/).slice(1)))
    handleClose();
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{marginTop: '15px'}}onClick={()=>{console.log('watched :', watched, 'user :', user, 'preselected: ', selected)}}>Watch List
      <FormControl sx={{ m: 1, width: 300, bgcolor: 'gray', borderRadius: '5px'}}>
        <Select
          labelId = 'watch-list-label'
          id = 'watch-list-chip'
          defaultValue={watched.map((watch) => watch) || ''}
          multiple
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          sx={{color: 'black'}}
          value={selected}
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
          {coinOptions.map((coin) => (
            <MenuItem
              key={coin}
              value={`${coin[0]} ${coin[1]}`}
              sx={{color: 'green', bgcolor: 'black'}}
            >
              {`${coin[0]} ${coin[1]}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className="watchListScroll" sx={{
        backgroundColor: '#13C4A3',
        maxHeight: '300px',
        overflow: 'auto',
        borderRadius: '10px',
        scrollbarGutter: 'stable',
        '&::-webkit-scrollbar': {
          width: '8px',
          background: 'lightgray',
          borderRadius: '0 10px 10px 0',
          backgroundColor: '#13C4A3'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
        }
      }}>
          {watched.map((watchedcoin) => <WatchEntry watchedcoin={watchedcoin} key={watchedcoin} setDynamicCoin={setDynamicCoin}/>)}
      </Box>
    </div>
  );
};

export default WatchList;