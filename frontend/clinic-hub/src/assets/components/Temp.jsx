import React from 'react'
import "./Temp.css"
import { Link } from 'react-router-dom'

export default function Temp() {
  return (
    <>
    <div className='temp'>
        <div style={{color:"white"}}>This box is temporary and contains links</div>
        <div><Link to="/patientdashboard">Patient Dashboard</Link></div>
        <div><Link to="/doctordashboard">Doctor Dashboard</Link></div>
        </div>
    </>
  )
}
