import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

import controllers from '../../backend/controllers/index.js'

function Register({ handleClose }) {
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
            const userData = await controllers.getUsers();
            const userExists = userData.some((user) => {
                return (user.response && user.response.firstName === registrationData.response.firstName && user.response.lastName === registrationData.response.lastName && user.response.email === registrationData.response.email)
            });
            const emailExists = userData.some((user) => {
                return (user.response && user.response.email === registrationData.response.email)
            })

            if (userExists) {
                alert('User already exists');
                return false;
            }
            if (emailExists) {
                alert('Email is already in use');
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

        if (!isUniqueUser) {
            return;
        }

        if (registrationData.response.password === registrationData.response.confirmPass) {
            console.log('This is registration data: ', registrationData);
            await addUser();
            alert('Registration Complete');
            handleClose();
        } else {
            alert('Passwords do not match');
            return;
        }
    }

    return (
        <Box className="registrationForm" style={{color: 'black'}}>
            <h2>Register</h2>
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
            <Button type="submit">Register</Button>
            <Button onClick={handleClose}>Cancel</Button>
            </form>
        </Box>
    )
}

export default Register;