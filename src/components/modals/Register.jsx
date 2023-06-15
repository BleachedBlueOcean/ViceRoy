import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import DialogActions from '@mui/material/DialogActions';

import controllers from '../../backend/controllers/index.js'

function Register({ handleClose, getUser }) {
    const [passMinError, setPassMinError] = useState(false);
    const [registrationData, setRegistrationData] = useState({ response: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: '',
    }})

        const style = {
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '12px',
        }

    // useEffect(()=> {
    //     console.log(registrationData)
    // }, [registrationData])

    const checkUser = async () => {
        try {
            const userData = await controllers.getAllUsers();

            const emailExists = userData.some((user) => {
                return (user && user.email === registrationData.response.email)
            })
            if (emailExists) {
                alert(`${registrationData.response.email} is already in use`);
                return false;
            }
            return true;
            } catch(err) {
                console.log('Unable to retrieve user list: ', err)
                return false;
            }
        }

    const addUser = async () => {
        try {
            await controllers.createUser(registrationData);
        } catch(error) {
            console.log('Unable to add user: ', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isUniqueUser = await checkUser();
        // console.log('is unique user:', isUniqueUser);
        if (!isUniqueUser) {
            return;
        }
        if ((registrationData.response.password.length) < 6 || (registrationData.response.confirmPass < 6)) {
            setPassMinError(true);
            return;
        }
        if (registrationData.response.password === registrationData.response.confirmPass) {
            await addUser();
            alert('Registration Complete');
            handleClose();
            await getUser(registrationData.response.email, registrationData.response.password)
            setPassMinError(false);
        } else {
            alert('Passwords do not match');
            return;
        }
    }

    return (
        <Box className="registrationForm" style={{color: 'black', width: 400}}>
            <form style={style} onSubmit={handleSubmit}>
                <FormControl sx={style}>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input id="firstName" type="text" placeholder="Enter first name" required onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, firstName: e.target.value
                        }})
                    }}/>
                </FormControl>
                <FormControl sx={style}>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input id="lastName" type="text" placeholder="Enter last name" required onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, lastName: e.target.value
                        }})
                    }}/>
                </FormControl>
                <FormControl sx={style}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" type="email" placeholder="Enter e-mail" required onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, email: e.target.value
                        }})
                    }}/>
                </FormControl>
                <FormControl sx={style}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" type="password" placeholder="Enter password" required onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, password: e.target.value
                        }})
                    }}/>
                </FormControl>
                <FormControl sx={style}>
                    <InputLabel htmlFor="confPass">Confirm Password</InputLabel>
                    <Input id="confPass" type="password" placeholder="Confirm password" required onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, confirmPass: e.target.value
                        }})
                    }}/>
                </FormControl>
                {passMinError && (<p style={{fontStyle: 'italic'}}> * password minimum length of 6 characters </p>) }
            <DialogActions>
                <Button type="submit">Register</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
            </form>
        </Box>
    )
}

export default Register;