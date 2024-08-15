import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./PatientDashboard.css"
import ProfileLinks from './ProfileLinks'
export default function PatientPassReset() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
    };


    return (
        <div className='patient-dashboard'>
            <div className="patient-dashboard-profile"><ProfileLinks></ProfileLinks></div>
            <div className="patient-dashboard-details">
                {/* --THis is Reset Form ------- */}
                <Form onSubmit={handleSubmit} style={{margin:"1% 3%"}}>
                    <h2 className="mb-4">Change Password</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control type="password" value={oldPassword} onChange={handleOldPasswordChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" value={newPassword} onChange={handleNewPasswordChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary" type="button">
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
