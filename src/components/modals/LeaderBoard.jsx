import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from '@mui/material';

const LeaderBoard = ({dialogOpen, closeDialog, page}) => {


  return (
    <>
    <Dialog open={dialogOpen} onClose={closeDialog}>
      <DialogTitle>Leaderboard</DialogTitle>
      {/* <IconButton >
        Replace with your close icon
        <CloseIcon />
      </IconButton> */}
      <DialogContent>
        <DialogContentText>
          Add your leaderboard content here
        </DialogContentText>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default LeaderBoard;