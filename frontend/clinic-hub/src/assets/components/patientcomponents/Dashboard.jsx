import React from 'react'
import "./Dashboard.css"
import PatientHealthRecord from './PatientHealthRecord'
import PatientReports from './PatientReports'
import nurse1 from "../../img/nurse.png"
import nurse2 from "../../img/nurse2.png"
import nurse3 from "../../img/image.png"

export default function Dashboard() {
    return (
        <div id='patient-dashboard'>
            <div className="dashboard-name">
                Dashboard
            </div> 
            <div className="patient-dashboard-row2">
                <div className="health-records">
                    <PatientHealthRecord></PatientHealthRecord>
                </div>
                {/* ------------------Favourities Card ---------------------- */}
                <div className="pat-das-book-appointment">
                    <div className='pat-das-book-apt'>
                        <div style={{ fontSize: "1.1rem" }}>Book a new</div>
                        <div style={{ fontSize: "1.5rem" }}>Appointments</div>
                    </div>
                    <div className="p-dashboard-fovourites"> 
                        <h4>Favourities</h4>
                        <a href="" >View all</a>
                    </div>
                    {/* ----------favourities horixontal card---------------- */}
                    <div className="p-d-card">
                        <img src={nurse1} alt="Image is ther" />
                        <div>
                            <span>Dr. Neelam Jain</span><br />
                            <span>Cardiology</span>
                        </div>
                    </div>
                    <div className="p-d-card">
                        <img src={nurse2} alt="Image is ther" />
                        <div>
                            <span>Dr. Vatsal Kayal</span><br />
                            <span>Cardiology</span>
                        </div>
                    </div>
                    <div className="p-d-card">
                        <img src={nurse3} alt="Image is ther" />
                        <div>
                            <span>Dr. Madhvi Sharma</span><br />
                            <span>Cardiology</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------reports----------------- */}
            <div className="patient-dashboard-row3">
            <PatientReports></PatientReports>
            </div>
        </div>
    )
}
