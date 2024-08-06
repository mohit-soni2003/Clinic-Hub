import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './assets/components/Navigationbar';
import HomePage from './assets/components/HomePage';
import Signup from "./assets/components/Signup"
import Signin from "./assets/components/Signin"

function App() {
    return (
        <>
            <Navigationbar></Navigationbar>
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
        </>
    )
}

export default App
