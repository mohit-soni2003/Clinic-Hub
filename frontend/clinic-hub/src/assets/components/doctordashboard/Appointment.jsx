import React from 'react'
// import "./DoctorDashboard.css"
import "./Appointment.css"
import temp from "../../img/temp/appointments.png"
import {Grid} from 'react-bootstrap-icons';
import {List} from 'react-bootstrap-icons';


import DsshboardLinks from './individualcomponent/DashboardLinks'

export default function DoctorAvailablity() {
 

    return (
        <div className='dr-das grid-container'>
            <div className="das-col1">
                <DsshboardLinks></DsshboardLinks>
            </div>
            {/* -----------Availablity Status --------- */}
            <div className="dr-das-app">
                <div className="dr-app-head">
                    <h1>Appointments</h1>
                    <div>
                        <div className="grid-type1"><Grid /></div>
                        <div className="grid-type2"><List/></div>
                    </div>
                </div>
            </div>


        </div>
    )
}
