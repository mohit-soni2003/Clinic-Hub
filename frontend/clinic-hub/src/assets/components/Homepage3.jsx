import React from 'react'
import "./Homepage3.css"
import logo from "../img/logo.png"
import s1 from "../img/home3/s1.svg"
import s2 from "../img/home3/s2.svg"
import s3 from "../img/home3/s3.svg"
import s4 from "../img/home3/s4.svg"
import s5 from "../img/home3/s5.svg"
import s6 from "../img/home3/s6.svg"
import s7 from "../img/home3/s7.svg"

export default function Homepage3() {
  return (
    <div className='Homepage3'>
        <div className="home3-heading">
            What are you looking for?
        </div>
        <div className="home3-container">
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s1} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s2} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s3} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s4} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s5} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s7} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
            <div className="home3-card">
                <div className="home3-image">
                    <img src={s6} alt="" />
                </div>
                <div className='card-text'>Book Appointment</div>
            </div>
        </div>
    </div>
  )
}
