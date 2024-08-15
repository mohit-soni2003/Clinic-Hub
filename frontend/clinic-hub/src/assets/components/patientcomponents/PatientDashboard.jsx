import React from 'react'
import Dashboard from './Dashboard'
import "./PatientDashboard.css"
import ProfileLinks from './ProfileLinks'
export default function PatientDashboard() {
  return (
    <div className='patient-dashboard'>
      <div className="patient-dashboard-profile"><ProfileLinks></ProfileLinks></div>
      <div className="patient-dashboard-details">
        <Dashboard></Dashboard>
      </div>
    </div>
  )
}
 