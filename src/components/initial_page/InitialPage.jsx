import React, { useState } from 'react';
import Register from '../modals/Register.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';

import controllers from '../../backend/controllers/index.js'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function InitialPage() {
    const [open, setOpen] = useState(false);
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }
    // send get/post request to database with user details
    // if login user matches, set view to trading
    // else return message that login doesnt match any account in database

    const getUser = async (signInEmail, signInPassword) => {
        try {
            const userData = await controllers.getUser(signInEmail, signInPassword)
            console.log('User Data: ', userData);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Box className="initialpage">
            <h1>Login</h1>
            <form>
                <div>
                    <InputLabel htmlFor="signInEmail">Email:</InputLabel>
                    <Input id="signInEmail" type="text" placeholder="E-mail" onChange={onEmailChange} />
                </div>
                <div>
                    <InputLabel htmlFor="signInPassword">Password:</InputLabel>
                    <Input id="signInPassword" type="password" placeholder="Password" onChange={onPasswordChange} />
                </div>
                <div>
                    <Button className="loginButton" onClick={() => {getUser(signInEmail, signInPassword)}}>Login</Button>
                </div>
                <div className="loginoptions">
                    <Button className="registerButton" onClick={handleOpen}>Register</Button>
                    <Typography> or </Typography>
                    <Button className="guestlogin">Continue as Guest</Button>
                </div>
            </form>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Register handleClose={handleClose} />
                </Box>
            </Modal>
        </Box>
    )
}

export default InitialPage;

{/* <div className="loginImage">
            <img src="" alt="loginGraph"/>
        </div> */}