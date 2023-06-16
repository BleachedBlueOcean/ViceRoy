import React, { useState, useEffect } from 'react';
import PossibleBadge from '../modals/PossibleBadge';
import Register from '../modals/Register';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Select, SvgIcon, Dialog, DialogTitle} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
// import Logo
import { ReactComponent as Logo } from '../../../icons/ViceRoySVG.svg';

import LeaderBoard from '../modals/LeaderBoard.jsx';

// TODO("AdbIcon AdbIcon change to ours")
// TODO("Avatar, Avatar src")
const pages = ['LeaderBoard', 'All Badges'];
const settings = ['Profile', 'Logout'];
const guestSettings = ['Register', 'Logout'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  bgcolor: 'rgba(0, 0, 0, .1)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NavBarTemp = ({signedIn, setSignedIn, setView, previewImage, setPreviewImage, setShowBadgesModal, user, guest, setGuest, open, handleOpen, handleClose, getUser}) => {
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
  // console.log('testing 2', e.target.innerHTML)
  let name = e.target.innerHTML;
  if(name === 'Logout') {
    // console.log(guest);
    setSignedIn(false);
    setGuest(false);
    setView('default');
  } else if(name === `Profile`) {
    setView('user_profile')
  } else if (name === `Register`) {
    handleOpen();
  }
}


  //For Pages
  const openDialog = (page) => {
    setPage(page);
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="navbar">
      <AppBar position="static" sx={{
          borderRadius: '0px',
          marginTop: '1rem',
          padding: '8px',
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="img"
            sx={{
              height: '10vh',
              width: 'auto',
            }} alt="ViceRoy Website Logo" src="icons/logo.png" />
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'optima',
                fontWeight: 700,
                fontSize: '3rem',
                letterSpacing: '.3rem',
                color: 'primary',
                textDecoration: 'none',
              }}
              className="navbar-title"
            >
              ViceRoy
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
            <SvgIcon>
              <Logo />
            </SvgIcon>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'optima',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ViceRoy
            </Typography>
            <Box className="navBarButtons" sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: '4rem',
              paddingRight: '4rem',
            }}>
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
                )) :settings.map((setting) => (
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
                  page={page} />
              )
            }
            {
              page === 'All Badges' && (
                <PossibleBadge
                  achievedBadges={user.achievements}
                  dialogOpen={dialogOpen}
                  closeDialog={closeDialog} />
              )
            }
          </>
        )
      }
      <Dialog open={open} aria-labelledby="dialog-title" sx={style}>
        <DialogTitle id="dialog-title">Register</DialogTitle>
        <Register handleOpen={handleOpen} handleClose={handleClose} getUser={getUser} setGuest={setGuest}/>
      </Dialog>
    </div>
  );
};
export default NavBarTemp;