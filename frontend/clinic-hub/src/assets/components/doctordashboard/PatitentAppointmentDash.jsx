import React from 'react'
import "./DoctorDashboard.css"
import image from "../../img/image.png"
import Button from 'react-bootstrap/Button';

import DsshboardLinks from './individualcomponent/DashboardLinks'

export default function PatientAppointmentDash() {
    return (
        <div className='dr-das grid-container'>
            <div className="das-col1">
                <DsshboardLinks></DsshboardLinks>
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
           

        </div>
    )
}
