import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Register({ handleClose }) {
    const [registrationData, setRegistrationData] = useState({ response: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: '',
    }})

    // useEffect(()=> {
    //     console.log(registrationData)
    // }, [registrationData])

    const handleSubmit = () => {
        if (registrationData.response.password === registrationData.response.confirmPass) {
            // axios.post('insertURL', registrationData)
            alert('Registration Complete')
            handleClose();
        } else {
            alert('Passwords do not match')
            return;
        }
    }

    return (
        <div className="registrationForm" style={{color: 'black'}}>
            <h2>Register</h2>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" placeholder="Enter first name" onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, firstName: e.target.value
                        }})
                    }}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" placeholder="Enter last name" onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, lastName: e.target.value
                        }})
                    }}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" placeholder="Enter e-mail" onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, email: e.target.value
                        }})
                    }}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, password: e.target.value
                        }})
                    }}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm password" onChange={(e) => {
                        setRegistrationData({ response: {
                            ...registrationData.response, confirmPass: e.target.value
                        }})
                    }}/>
                </div>
            </form>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
            <Button onClick={handleClose}>Cancel</Button>
        </div>
    )
}

export default Register;