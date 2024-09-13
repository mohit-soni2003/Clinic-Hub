import React from 'react';
import './DashboardLinks.css'; // Import your CSS file
import profile from "../../../img/image.png"
import { Link } from "react-router-dom"
export default function DashboardLinks() {
    return (
        <div className="patient-profile-container">
            <div className="patient-profile">
                <div className="patient-profile-image"><img src={profile} alt="" /></div>
                <div className="patient-profile-name">Dr Edalin Hendry</div>
                <div className="dr-das-qualification">BDS, MDS - Oral & Maxillofacial Surgery</div>
                <div className="dr-speciality">Dentist</div>
                <div>
                <label>Status </label>
                    <select name="" id="dr-status">
                        <option value="Available"></option>
                        <option value="Available"> I am available</option>
                        <option value="Available"> I am not available</option>
                    </select>
                </div>
            </div>
            <div className="dashboard-links-container">
                <div className="patient-profile-links"><Link to="/DoctorDashboard">Dashboard</Link></div>
                <div className="patient-profile-links"><Link to="/patientrequest">Requests</Link></div>
                <div className="patient-profile-links"><Link>Appointments</Link></div>
                <div className="patient-profile-links"><Link to="/doctoravailablityupdate">Available Timings</Link></div>
                <div className="patient-profile-links"><Link>My Patients</Link></div>
                <div className="patient-profile-links"><Link>Specialities And Services</Link></div>
                <div className="patient-profile-links"><Link>Reviews</Link></div>
                <div className="patient-profile-links"><Link to="./PatientProfileUpdate">Account</Link></div>
                <div className="patient-profile-links"><Link>Social Media</Link></div>
                <div className="patient-profile-links"><Link to="/PatientPassReset">Change Password</Link></div>
                <div className="patient-profile-links"><Link>Logout</Link></div>
            </div>
        </div>
    );
};

