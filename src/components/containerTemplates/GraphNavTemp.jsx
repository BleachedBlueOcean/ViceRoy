import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Box, MenuItem, Select, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const GraphNavTemp = ({coinOptions, coin, interval, setCoin, setInterval, view, setView}) =>{

  return (
    <AppBar className="GraphNavBar" position="relative" sx={{
      borderRadius: '36px 36px 0px 0px',
      height: '4rem'
    }}>
      <Toolbar sx={{
        position: 'absolute',
        ml: '3rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: '0',
        gap: '4rem',
      }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {coin[1]}({coin[0]})
        </Typography>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <Select value={interval} displayEmpty onChange={(e) => setInterval(e.target.value)}>
            <MenuItem value="" disabled>
              Select Interval
            </MenuItem>
            <MenuItem value={'day'}>Daily</MenuItem>
            <MenuItem value={'hour'}>Hourly</MenuItem>
            <MenuItem value={'minute'}>Real-Time</MenuItem>
          </Select>
        </Box>
        <Box sx={{ minWidth: 120, mr: 2 }}>

{/* <Select value={coin[0]} displayEmpty onChange={(e) => setCoin(e.target.value)}>
<MenuItem value={[`BTC`,`Bitcoin`]} disabled>
 Select Coin
</MenuItem>
{coinOptions.map((target, i) => <MenuItem key={i} value={target}>{target[0]}  {target[1]}</MenuItem>)} */}
          <Select value={coin} displayEmpty onChange={(e) => setCoin(e.target.value.split(','))}>
            {coinOptions.map((target, i) => <MenuItem key={i} value={target[0]+ ',' + target[1]}>{target[0]}  {target[1]}</MenuItem>)}
          </Select>
        </Box>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <Select value={view} displayEmpty onChange={(e) => setView(e.target.value)}>
            <MenuItem value={view} disabled >
              Select Graph Style
            </MenuItem>
            <MenuItem value={'line'}>Line</MenuItem>
            <MenuItem value={'candle'}>Candle Stick</MenuItem>
          </Select>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ mr: 1 }}
          />
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
);
};

export default GraphNavTemp