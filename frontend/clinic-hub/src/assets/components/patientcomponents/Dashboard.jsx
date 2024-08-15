import React from 'react'
import "./Dashboard.css"
import PatientHealthRecord from './PatientHealthRecord'
import PatientReports from './PatientReports'
import image from "../../img/image.png"


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
                    <div style={{ backgroundColor: "#0232BF", color: "white", fontWeight: "600", padding: "3px 6px",width:"100%", borderRadius: "10px" }}>
                        <div style={{ fontSize: "1.1rem" }}>Book a new</div>
                        <div style={{ fontSize: "1.5rem" }}>Appointments</div>
                    </div>
                    <div className="p-dashboard-fovourites"> 
                        <h4 style={{margin:"auto 0px"}}> Favourities</h4>
                        <a href="" style={{margin:"auto 0px"}}>View all</a>
                    </div>
                    {/* ----------favourities horixontal card---------------- */}
                    <div className="p-d-card">
                        <img src={image} alt="Image is ther" />
                        <div>
                            <span>Shyam Maheshwari</span><br />
                            <span>Cardiology</span>
                        </div>
                    </div>
                    <div className="p-d-card">
                        <img src={image} alt="Image is ther" />
                        <div>
                            <span>Shyam Maheshwari</span><br />
                            <span>Cardiology</span>
                        </div>
                    </div>
                    <div className="p-d-card">
                        <img src={image} alt="Image is ther" />
                        <div>
                            <span>Shyam Maheshwari</span><br />
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
