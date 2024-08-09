import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './assets/components/Navigationbar';
import HomePage from './assets/components/HomePage';
import Signup from "./assets/components/Signup"
import Signin from "./assets/components/Signin"
import Doctor from "./assets/components/Doctor"
import Clinic from "./assets/components/Clinic"
import SearchPharmacyResult from './assets/components/SearchPharmacyResult';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/search" element={<SearchPharmacyResult />}></Route>
            <Route path="/doctor" element={<Doctor/>}></Route>
            <Route path="/clinic" element={<Clinic/>}></Route>
        </Routes>
        </BrowserRouter>
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
