import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Register({ handleClose }) {

    return (
        <div className="registrationForm" style={{color: 'black'}}>
            <h2>Register</h2>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" placeholder="Enter first name" />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" placeholder="Enter last name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" placeholder="Enter e-mail" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm password" />
                </div>
            </form>
            <Button type="submit" >Register</Button>
            <Button onClick={handleClose}>Cancel</Button>
        </div>
    )
}

export default Register;