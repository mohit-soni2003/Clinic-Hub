import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './assets/components/Navigationbar';
import Footer from './assets/components/Footer';
import HomePage from './assets/components/HomePage';
import Signup from "./assets/components/Signup"
import Signin from "./assets/components/Signin"
import Doctor from "./assets/components/Doctor"
import Clinic from "./assets/components/Clinic"
import SearchResult from './assets/components/SearchResult';
import Patient from "./assets/components/patientcomponents/PatientDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientProfileUpdate from "./assets/components/patientcomponents/PatientProfileUpdate"
import PatientDashboard from "./assets/components/patientcomponents/PatientDashboard"
import PatientMyAppoint from "./assets/components/patientcomponents/PatientMyAppoint"
import PatientPassReset from "./assets/components/patientcomponents/PatientPassReset"
// -----------------------Doctor Dashboard ---------------------

import DoctorDashboard from "./assets/components/doctordashboard/DoctorDashboard"
import Temp from "./assets/components/Temp"
function App() {
    return (
        <>
        <BrowserRouter>
            <Temp></Temp>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/search" element={<SearchResult />}></Route>
            <Route path="/doctor" element={<Doctor/>}></Route>
            <Route path="/clinic" element={<Clinic/>}></Route>
            <Route path="/PatientDashboard" element={<PatientDashboard/>}></Route>
            <Route path="/patientmyappoint" element={<PatientMyAppoint/>}></Route>
            <Route path="/PatientProfileUpdate" element={<PatientProfileUpdate/>}></Route>
            <Route path="/PatientPassReset" element={<PatientPassReset/>}></Route>
            {/* ---------------------DOCTOR DASHBOARD-------------------- */}
            <Route path="/DoctorDashboard" element={<DoctorDashboard/>}></Route>

        </Routes>
        {/* <Patient></Patient> */}
        {/* <DoctorDashboard></DoctorDashboard> */}
        </BrowserRouter>
        <Footer></Footer>
            {/* <Navigationbar></Navigationbar>
            <div className="home-page"><HomePage></HomePage>
            </div>
            <Navigationbar></Navigationbar>
            <div className="temp-display" style={{border : "0px solid red"}}>
                <Signup></Signup>
            </div>
            <Navigationbar></Navigationbar>
            <div className="temp-display" style={{border : "0px solid red"}}>
                <Signin></Signin>
            </div>
            <Navigationbar></Navigationbar>
            <div className="temp-display" style={{border : "0px solid red"}}>
                <Doctor></Doctor>
            </div>
            <Navigationbar></Navigationbar>
            <div className="temp-display" style={{border : "0px solid red"}}>
            <SearchPharmacyResult></SearchPharmacyResult>
            </div> */}

        </>
    )
}

export default App
