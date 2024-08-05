import React from 'react'
import "./Homepage1.css"
import homepage from "../img/image.png"
import f1 from "../img/feature1-doctor.avif"
import f2 from "../img/feature2-hospital.avif"
import f3 from "../img/feature3-homepng.png"
import f4 from "../img/feature4-ladynurse.png"
import f5 from "../img/feature5-records.png"


export default function Homepage1() {
  return (
    <>
      <div className="home-page-1">
        <div className="home-page-1-container">
          <div className="home-page-1-item1">
            <div className="home-page-line1">Providing Quality Health Care For Brighter And Healthy Future.</div>
            <div className="home-page-line2">Consult Top DOctors For Any health Concern</div>
            <div className="home-page-1-feature-container">
              <div className="home-page-feature"><img src={f1} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Search Doctor</div></div>
              <div className="home-page-feature"><img src={f2} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Search Clinic</div></div>
              <div className="home-page-feature"><img src={f3} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Home Visits</div></div>
              <div className="home-page-feature"><img src={f4} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Track Health</div></div>
              <div className="home-page-feature"><img src={f5} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Health Records</div></div>
            </div>

          </div>
          <div className="home-page-1-item2">
            <img src={homepage} alt="Image Loading....." />
          </div>
        </div>
      </div>
    </>
  )
}
