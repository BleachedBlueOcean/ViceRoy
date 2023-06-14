import React, {useState, useEffect} from 'react';
import PossibleBadge from '../modals/PossibleBadge';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Select} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

import LeaderBoard from '../modals/LeaderBoard.jsx';

// TODO("AdbIcon AdbIcon change to ours")
// TODO("Avatar, Avatar src")
const pages = ['LeaderBoard', 'All Badges'];
const settings = ['Profile', 'Logout'];
const guestSettings = ['Register', 'Logout'];


function NavBarTemp({signedIn, setSignedIn, setView, previewImage, setPreviewImage, setShowBadgesModal, user, guest, setGuest}) {
  const [anchorNav, setAnchorNav] = useState(null);
  const [anchorUser, setAnchorUser] = useState(null);
  //NavBar Pages
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };
  const handleCloseUserMenu = () => {
    // console.log('testing menu', e.target)
    setAnchorUser(null);
  };
// FOR Settings
const handleSetting = (e) => {
  console.log('testing 2', e.target.innerHTML)
  let name = e.target.innerHTML;
  console.log(name)
  if(name === 'Logout') {
    console.log('logged out')
    if(signedIn){
      setSignedIn(false)
    } else if(guest){
      setGuest(false)
    }
  }
  if(name === `Profile`) {
    setView('user_profile')
  }
}

  //For Pages
  const openDialog = (page) => {
    setPage(page)
    setDialogOpen(true)
  };
  const closeDialog = () => {
    setDialogOpen(false)
  }


  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO GOES HERE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorNav)}
                onClick={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" value={page}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO GOES GOES HERE 
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button value={page}
                  key={page}
                  onClick={() => openDialog(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile Picture" src={previewImage} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorUser)}
                onClose={handleCloseUserMenu}>
                {guest ? 
                guestSettings.map((setting) => (
                  <MenuItem key={setting} value={setting}
                    onClick={handleSetting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )) :
                  settings.map((setting) => (
                    <MenuItem key={setting} value={setting}
                      onClick={handleSetting}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {
        dialogOpen && (
          <>
          {
            page === 'LeaderBoard' && (
              <LeaderBoard dialogOpen={dialogOpen}
                closeDialog={closeDialog}
                page={page}/>
            )
          }
          {
            page ==='All Badges' && (
              <PossibleBadge
                achievedBadges={user.achievements}
                dialogOpen={dialogOpen}
                closeDialog={closeDialog}/>
            )
          }
          </>
        )
      }
    </div>
  );
}
export default NavBarTemp;