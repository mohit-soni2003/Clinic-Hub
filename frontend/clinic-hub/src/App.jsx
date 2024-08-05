import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './assets/components/Navigationbar';
import HomePage from './assets/components/HomePage';

function App() {
 return(
  <>
  <div><Navigationbar></Navigationbar></div>
  <div className="home-page"><HomePage></HomePage></div>
  </>
 )
}

export default App
