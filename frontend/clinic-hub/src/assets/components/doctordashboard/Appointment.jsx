import React from 'react'
import "./DoctorDashboard.css"
import "./Appointment.css"
import temp from "../../img/temp/appointments.png"

import DsshboardLinks from './individualcomponent/DashboardLinks'

export default function DoctorAvailablity() {

  
    return (
        <div className='dr-das grid-container'>
            <div className="das-col1">
                <DsshboardLinks></DsshboardLinks>
            </div>
            {/* -----------Availablity Status --------- */}
            <div className="dr-das-availablity">
               <img src={temp} alt="" />
            </div>
           

        </div>
    )
}
