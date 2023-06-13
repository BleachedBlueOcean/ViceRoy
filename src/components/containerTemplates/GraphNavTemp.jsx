import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Box, MenuItem, Select, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const GraphNavTemp = ({coin, interval, setCoin, setInterval}) =>{

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <Select value="" displayEmpty>
            <MenuItem value="" disabled>
              Select Interval
            </MenuItem>
            <MenuItem value={1}>Graph 1</MenuItem>
            <MenuItem value={2}>Graph 2</MenuItem>
            <MenuItem value={3}>Graph 3</MenuItem>
          </Select>
        </Box>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <Select value="" displayEmpty>
            <MenuItem value="" disabled>
              Select Coin
            </MenuItem>
            <MenuItem value={1}>Graph 1</MenuItem>
            <MenuItem value={2}>Graph 2</MenuItem>
            <MenuItem value={3}>Graph 3</MenuItem>
          </Select>
        </Box>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <Select value="" displayEmpty>
            <MenuItem value="" disabled>
              Select Graph Style
            </MenuItem>
            <MenuItem value={1}>Graph 1</MenuItem>
            <MenuItem value={2}>Graph 2</MenuItem>
            <MenuItem value={3}>Graph 3</MenuItem>
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