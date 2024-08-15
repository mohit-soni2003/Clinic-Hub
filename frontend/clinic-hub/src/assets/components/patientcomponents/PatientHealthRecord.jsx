import React from 'react';
import { Card, Row, Col, Container, Button, Image } from 'react-bootstrap';
import profile from "../../img/image.png"
import "./PatientHealthRecords.css"

export default function PatientHealthRecord() {
    return (
        <>
            <div className="patient-health-record-container">
                {/* -------------header---------- */}
                <div className="dashboard-header">
                    <h3>Health Records</h3>
                    <div className="dashboard-patient-select">
                        <img src={profile} alt="" />
                        <h6>Mohit Soni</h6>
                    </div>
                </div>
                {/* ------------Reports details-------- */}
                <div className="d-flex">
                    {/* --------------Medical-readings-------- */}
                    <div className="patients-medical-readings">
                        <table>
                            <tr>
                                {/* ----------------Blood Pressure--------- */}
                                <td>
                                    <h5 className="mb-1">
                                        <i className="bi bi-heart-fill text-danger me-2"></i> Heart Rate
                                    </h5>
                                    <h3 className="mb-0">140 Bpm</h3>
                                    <span className="text-muted">2%</span>
                                </td>
                                {/* ------------------Glucose Level--------------  */}
                                <td>
                                    <h5 className="mt-1 mb-1">
                                        <i className="bi bi-droplet-fill text-primary me-2"></i> Glucose Level
                                    </h5>
                                    <h3 className="mb-0">70 - 90</h3>
                                    <span className="text-muted">6%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 className="mt-1 mb-1">
                                        <i className="bi bi-droplet-fill text-primary me-2"></i> Blood Pressure
                                    </h5>
                                    <h3 className="mb-0">100 mg/dl</h3>
                                    <span className="text-muted">2%</span>
                                </td>
                                <td> <h5 className="mb-2">
                                    <i className="bi bi-thermometer-half text-warning me-2"></i> Body Temprature
                                </h5>
                                    <h3 className="mb-0">37.5 C</h3>
                                    <span className="text-muted">6%</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 className="mt-1 mb-1">
                                        <i className="bi bi-pen-fill text-info me-2"></i> SPo2
                                    </h5>
                                    <h3 className="mb-0">96%</h3>
                                    <span className="text-muted">6%</span>
                                </td>
                                <td>
                                    <h5 className="mt-1 mb-1">
                                        <i className="bi bi-person-fill text-purple me-2"></i> BMI
                                    </h5>
                                    <h3 className="mb-0">20.1 kg/m2</h3>
                                    <span className="text-muted">6%</span>
                                </td>
                            </tr>
                        </table>
                        <div className="dashboard-last-visit">Report generated on last visit : 25 Mar 2024</div>
                    </div>
                    {/* -------------medical charts-------------- */}
                    <div className="dashboard-pie-chart">
                            <p style={{fontSize:"1.2rem" , color:"grey"}}>Overall Report</p>
                            <div className="chart-circle">
                                   Last Visit 25 Mar 2024
                            </div>
                            <div className="dashboard-health-status">Your Health is 95% Normal</div>
                            <div className="dashboard-btn-view-details">      <Button variant="dark">View Details</Button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

