import React from 'react';
import './ProfileLinks.css'; // Import your CSS file
import profile from "../../img/image.png" 
import {Link} from "react-router-dom"
export default function ProfileLinks() {
    return (
        <div className="patient-profile-container">
            <div className="patient-profile">
                <div className="patient-profile-image"><img src={profile} alt="" /></div>
                <div className="patient-profile-name">Nidhi Agnihotri</div>
                <div className="patient-profile-gender">Female 22 Years 1 months </div>
            </div>
            <div className="dashboard-links-container">
                <div className="patient-profile-links"><Link to="/">Dashboard</Link></div>
                <div className="patient-profile-links"><Link to="/patientmyappoint">My Appointments</Link></div>
                <div className="patient-profile-links"><Link>Favourites</Link></div>
                <div className="patient-profile-links"><Link>Dependants</Link></div>
                <div className="patient-profile-links"><Link>Add Medical Records</Link></div>
                <div className="patient-profile-links"><Link>Accounts</Link></div>
                <div className="patient-profile-links"><Link>Invoices</Link></div>
                <div className="patient-profile-links"><Link to="/PatientProfileUpdate">Profile Setting</Link></div>
                <div className="patient-profile-links"><Link>Medical Details</Link></div>
                <div className="patient-profile-links"><Link to="/PatientPassReset">Change Password</Link></div>
                <div className="patient-profile-links"><Link>Logout</Link></div>
            </div>
            </div>
            );
};

