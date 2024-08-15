import React from 'react'
import "./MyAppointment.css"
import profile from "../../img/image.png" 

import Button from 'react-bootstrap/Button';


export default function MyAppointment() {
  return (
    <div className='pat-das-myappointment container'>
      <h2>Appointments</h2>
      <div className="pat-appt-filter-bar">
        <span>Upcomming (12)</span>
        <span>Cancelled (8)</span>
        <span>Completed (5)</span>
      </div>
      <div className="pat-app-card-container">
        {/* //appointment card------- */}
        <div className="pat-app-card">
            <div className="block1">
              <img src={profile} alt="Image" />
              <span>Dr.Madhav Verma</span>
            </div>
            <div className="block2">
              <div>3 sep 2024 06:00PM</div>
              <div>General Visit : Video Call</div>
            </div>
            <div className="block3">
              <div>mahesh@gmail.com</div>
              <div>+91 9893101215</div>
            </div>
            <div className="block4">
            <Button variant="outline-primary">Attend</Button>
            </div>
        </div>
        <div className="pat-app-card">
            <div className="block1">
              <img src={profile} alt="Image" />
              <span>Dr.Madhav Verma</span>
            </div>
            <div className="block2">
              <div>3 sep 2024 06:00PM</div>
              <div>General Visit : Video Call</div>
            </div>
            <div className="block3">
              <div>mahesh@gmail.com</div>
              <div>+91 9893101215</div>
            </div>
            <div className="block4">
            <Button variant="outline-primary">Attend</Button>
            </div>
        </div>
        <div className="pat-app-card">
            <div className="block1">
              <img src={profile} alt="Image" />
              <span>Dr.Madhav Verma</span>
            </div>
            <div className="block2">
              <div>3 sep 2024 06:00PM</div>
              <div>General Visit : Video Call</div>
            </div>
            <div className="block3">
              <div>mahesh@gmail.com</div>
              <div>+91 9893101215</div>
            </div>
            <div className="block4">
            <Button variant="outline-primary">Attend</Button>
            </div>
        </div>
        <div className="pat-app-card">
            <div className="block1">
              <img src={profile} alt="Image" />
              <span>Dr.Madhav Verma</span>
            </div>
            <div className="block2">
              <div>3 sep 2024 06:00PM</div>
              <div>General Visit : Video Call</div>
            </div>
            <div className="block3">
              <div>mahesh@gmail.com</div>
              <div>+91 9893101215</div>
            </div>
            <div className="block4">
            <Button variant="outline-primary">Attend</Button>
            </div>
        </div>
      </div>
    </div>
  )
}
 