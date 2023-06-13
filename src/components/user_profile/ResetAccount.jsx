import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@mui/material';


import controllers from '../../backend/controllers/index.js'


const ResetAccount = ({user, setUser}) => {
  const [open, setOpen] = useState(false);
  // const [resetAcc, setResetAcc] = useState(user);


  const resetAccount = async () => {
    try{
    const data = await setUser((prevacc) => {
      return {...prevacc, coinsOwned: ['jhgfj', 'qwkedhgjk'], totalAssets: 234230000}
    });

    console.log('teting', user)
    // console.log('reste acc', user)

     await controllers.updateUser(user.id, user);
    //  const userData = await controllers.getUser(user.email)
    }catch(err){
      console.log('error', err)
    }

  };

//this is fine
  const handleOpen = () => {
    setOpen(true);
    // console.log(user)
  };


  const handleClose = (e) => {
    // console.log(e.target.id)
    const confirmation = e.target.id;

      if(confirmation === 'no') {
        console.log('account is open')
      } else {
        console.log('account is closed')
        //reset db code here
        resetAccount()
        // console.log('POST CLOSE', user)
      }
      setOpen(false);
      controllers.getAllUsers()

  };
  // useEffect(() => {
  //   // console.log('acc', acc)
  // }, [open])







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