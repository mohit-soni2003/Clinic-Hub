import React from 'react'
import MyAppointment from './MyAppointment'
import "./PatientDashboard.css"
import ProfileLinks from './ProfileLinks'
export default function PatientMyAppoint() {
  return (
    <div className='patient-dashboard'>
      <div className="patient-dashboard-profile"><ProfileLinks></ProfileLinks></div>
      <div className="patient-dashboard-details">
        <MyAppointment></MyAppointment>
      </div>
    </div>
  )
}
 