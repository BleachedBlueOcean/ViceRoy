import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@mui/material';


import controllers from '../../backend/controllers/index.js'


const ResetAccount = ({user, setUser}) => {
  const [open, setOpen] = useState(false);


  const confirmReset = async () => {
    const form = {...user, coinsOwned: ['asdlfkasjdhkj'], totalAssets: 598700, availableCash: 509780}
    setUser(form);
    console.log('this is form', form.id)
    try{
      // console.log('this is form id', form.id)
      await controllers.updateUser(form.id, form);
    }catch(err){
      console.log('error', err)
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = async (e) => {
    const confirmation = e.target.id;
      if(confirmation === 'no') {
        console.log('account is open')
      } else {
        console.log('account is closed')
        confirmReset()
      }
      setOpen(false);
      try{
        const data = await controllers.getUserById(user.id)
        return data;

      }catch(err) {console.log('reset errr', err)}
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
          <Button onClick={handleClose} id='yes'>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ResetAccount;