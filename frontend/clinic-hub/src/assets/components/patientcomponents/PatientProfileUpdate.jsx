import React from 'react'
import ProfileSettingForm from './ProfileSettingForm'
import "./PatientProfileUpdate.css"
import ProfileLinks from './ProfileLinks'
export default function PatientProfileUpdate() {
  return (
    <div className='patient-dashboard'>
      <div className="patient-dashboard-profile"><ProfileLinks></ProfileLinks></div>
      <div className="patient-dashboard-details">
        <ProfileSettingForm></ProfileSettingForm>
      </div>
    </div>
  )
}