import React from 'react'
import "./DoctorDashboard.css"
import image from "../../img/image.png"
import Button from 'react-bootstrap/Button';

import ProfileLinks from './individualcomponent/DashboardLinks'

export default function DoctorDashboard() {
    return (
        <div className='dr-das grid-container'>
            <div className="das-col1">
                <ProfileLinks></ProfileLinks>
            </div>
            <div className="das-col2">
                <div>
                    <div>
                        <h5>Total Patient</h5>
                        <h2>978</h2>
                    </div>
                    <img src="" alt="abc" />

                </div>
                <div>
                    <div>
                        <h5>Total Patient</h5>
                        <h2>978</h2>
                    </div>
                    <img src="" alt="abc" />

                </div>
                <div>

                    <div>
                        <h5>Total Patient</h5>
                        <h2>978</h2>
                    </div>
                    <img src="" alt="abc" />

                </div>

            </div>
            <div className="das-col3">
                <div className='col3-header'>
                    <h2>Appointments</h2>
                    <div>View All</div>
                </div>
                <div className="dr-app-card">
                    <div className='pat-name'>
                        <img src={image} alt="image" />
                        <span> Mohit Soni</span>
                    </div>
                    <div className='dr-app-date'>
                        <div>11 NOV 2024 10:45 AM </div>
                        <span>General</span>
                    </div>
                    <div className="dr-btn-container">
                        <div className='dr-app-btn' style={{ backgroundColor: "green" }}>Accept</div>
                        <div className='dr-app-btn' style={{ backgroundColor: "blue" }}>Deny </div>
                    </div>
                </div>
                <div className="dr-app-card">
                    <div className='pat-name'>
                        <img src={image} alt="image" />
                        <span> Mohit Soni</span>
                    </div>
                    <div className='dr-app-date'>
                        <div>11 NOV 2024 10:45 AM </div>
                        <span>General</span>
                    </div>
                    <div className="dr-btn-container">
                        <div className='dr-app-btn' style={{ backgroundColor: "green" }}>Accept</div>
                        <div className='dr-app-btn' style={{ backgroundColor: "blue" }}>Deny </div>
                    </div>
                </div>
                <div className="dr-app-card">
                    <div className='pat-name'>
                        <img src={image} alt="image" />
                        <span> Mohit Soni</span>
                    </div>
                    <div className='dr-app-date'>
                        <div>11 NOV 2024 10:45 AM </div>
                        <span>General</span>
                    </div>
                    <div className="dr-btn-container">
                        <div className='dr-app-btn' style={{ backgroundColor: "green" }}>Accept</div>
                        <div className='dr-app-btn' style={{ backgroundColor: "blue" }}>Deny </div>
                    </div>
                </div>


            </div>
            <div className="das-col4">
                <div className="das-col4-header">
                    <h3>Recent Patients</h3>
                    <div>View All</div>
                </div>
                <div className="recent-pat-card-container">
                    <div className="recent-pat-card">
                        <img src={image} alt="" />
                        <div className='recent-pat-name'>Abhishek Pandey</div>
                        <div className="recent-patient-id">Patient : PAT10012</div>
                        <div className='app-date'>Last Appointment 13 Mar 2024</div>
                    </div>
                    <div className="recent-pat-card">
                        <img src={image} alt="" />
                        <div className='recent-pat-name'>Abhishek Pandey</div>
                        <div className="recent-patient-id">Patient : PAT10012</div>
                        <div className='app-date'>Last Appointment 13 Mar 2024</div>
                    </div>
                </div>

            </div>
            <div className="das-col5">
                <div className="das-col5-header">
                    Upcomming Appointment
                </div>
                <div className="das-col5-body">
                    <div>
                        <img src={image} alt="" />
                        <div>Harshil Dhoot</div>
                    </div>
                    <div>
                        General Visit
                        <br />
                        Today , 10:45
                    </div>
                </div>
                <div className="das-col5-footer">
                    <div>Appointment Type</div>
                    <div>
                        <Button variant="light" type="submit"> Start Appointment</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
