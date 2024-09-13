import React from 'react'
import "./DoctorDashboard.css"
import "./DoctorAvailablity.css"
import image from "../../img/image.png"

import DsshboardLinks from './individualcomponent/DashboardLinks'

export default function DoctorAvailablity() {

  
    return (
        <div className='dr-das grid-container'>
            <div className="das-col1">
                <DsshboardLinks></DsshboardLinks>
            </div>
            {/* -----------Availablity Status --------- */}
            <div className="dr-das-availablity">
                {/* -----heading Available Time ------- */}
                <h4>Available Timings</h4>
                <div className="availablity-type">
                    <div>General Availablity</div>
                    <div>Clinic Availablity</div>
                </div>
                <div className="avl-day">
                    
                </div>
            </div>
           

        </div>
    )
}
