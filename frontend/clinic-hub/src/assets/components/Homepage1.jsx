import React from 'react'
import "./Homepage1.css"
import homepage from "../img/image.png"
import f1 from "../img/feature1-doctor.avif"
import f2 from "../img/feature2-hospital.avif"
import f3 from "../img/feature3-homepng.png"
import f4 from "../img/feature4-ladynurse.png"
import f5 from "../img/feature5-records.png"
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


export default function Homepage1() {
  const navigate = useNavigate()
  return (
    <>
      <div className="home-page-1">
        <div className="home-page-1-container">
          <div className="home-page-1-item1">
            <div className="home-page-line1">Providing Quality Health Care For Brighter And Healthy Future.</div>
            <div className="home-page-line2">Consult Top DOctors For Any health Concern</div>
            <div className="home-page-1-feature-container" style={{ margin: "3% 0px" }}>
              <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f1} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Search Doctor</div></div>
              <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f2} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Search Clinic</div></div>
              <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f3} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Home Visits</div></div>
              <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f4} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Track Health</div></div>
              <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f5} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Health Records</div></div>
            </div>
            <Form className="d-flex" style={{ margin: "3% 0px 0px 0px" }}>
              <Form.Select aria-label="Select Location" style={{ height: "50px", width: "200px", }}>
                <option value="Jaipur">Jaipur</option>
                <option value="Jaipur">Indore</option>
                <option value="Jaipur">Ujjain</option>
                <option value="Jaipur">Jabalpur</option>
                {/* Add more location options */}
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="Search Doctor, clinics, hospital, etc."
                className="mx-2"
                style={{ height: "50px", width: "300px" }}
              />
              <Button onClick={() => navigate("/search")} variant="primary" type="submit" style={{ height: "50px", width: "200px" }}>
                Search For Result
              </Button>
            </Form>

          </div>
          <div className="home-page-1-item2">
              <img src={homepage} alt="Image Loading....." />
          </div>
        </div>
      </div>
    </>
  )
}
