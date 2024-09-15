import React from 'react'
import "./DoctorDashboard.css"
import "./DoctorAvailablity.css"
import image from "../../img/image.png"
import temp from "../../img/temp/dr-availabletime.png"

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
