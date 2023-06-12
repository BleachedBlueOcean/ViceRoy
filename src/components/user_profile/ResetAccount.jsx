import React, {useState} from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@mui/material';

const ResetAccount = () => {
  const [open, setOpen] = useState(false);
  const [resetAcc, setResetAcc] = useState({});
  //should wipe out all coins and reset initial funds to 500
  //wipe badges?
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    // console.log(e.target.id)
    const confirmation = e.target.id;
    setOpen(false);
    if(confirmation === 'no') {
      // console.log('account is open')
    } else {
      console.log('account is closed')
      //reset db code here
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>Reset Account</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to reset your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id='no'>No</Button>
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ResetAccount;