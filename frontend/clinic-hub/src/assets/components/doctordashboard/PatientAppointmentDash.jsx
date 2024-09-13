import React from 'react'
import "./DoctorDashboard.css"
import "./PatientAppointmentDash.css"
import image from "../../img/image.png"

import DsshboardLinks from './individualcomponent/DashboardLinks'

export default function PatientAppointmentDash() {

    const patreqcard=()=>{
        return(
            <>
            <div className="dr-das-pat-req-card">
                    {/* -----------profile ---------- */}
                    <div className="pat-req-profile">
                        <img src={image} alt="" />
                        <div className="pat-req-name">Mohit Soni</div>
                    </div>
                    {/* ---------Date and consult reason---------- */}
                    <div className="pat-consult-details">
                        <div className='pat-con-time'>
                        11 Nov 2024 10.45 AM
                        </div>
                        <div className="pat-con-reason">
                            Consult For Dental
                        </div>
                    </div>
                    {/* ------Type of appoinment------------ */}
                    <div className='pat-consult-details'>
                        <div>Type of Appointment</div>
                        <div className="type-of-appt">Video Call</div>
                    </div>
                    {/* --------buttons------------ */}

                    <div className="pat-req-btn-container">
                        <div className='pat-req-btn' id='pat-req-btn1'>Accept</div>
                        <div className='pat-req-btn' id='pat-req-btn2'>Reject</div>
                    </div>
                 </div>
            </>
        )
    }
    return (
        <div className='dr-das grid-container'>
            <div className="das-col1">
                <DsshboardLinks></DsshboardLinks>
            </div>
            {/* -----------ALL Requests --------- */}

            <div className="das-col-pat-req">
                {/* ---------filter and Heading---------- */}
                <div className="dr-das-r1">
                    <h2>Requests</h2>
                    <select name="" id="dr-das-filter">
                        <option value="7">Last 7 Days</option>
                        <option value="7">This Month</option>
                        <option value="7">Today</option>
                    </select>
                </div>

                {/* --------Requests Card ---------- */}

                <div className="dr-das-pat-req-container">
                 {patreqcard()}
                 {patreqcard()}
                 {patreqcard()}
                 {patreqcard()}
                </div>

            </div>
           

        </div>
    )
}
