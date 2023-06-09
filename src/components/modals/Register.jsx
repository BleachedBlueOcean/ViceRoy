import React from 'react';


function Register(){

    return (
        <>
            <button onClick={() => setShowModal(true)}>Register</button>
            <ReactModal isOpen={showModal}>
                <div>
                    <label>First Name:</label>
                    <label>Last Name:</label>
                    <label>Email:</label>
                    <label>Password:</label>
                </div>
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button>Register</button>
            </ReactModal>
        </>
    )

}

export default Register;