import React from 'react'
import signupimage from "../img/signup.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import f1 from "../img/feature1-doctor.avif"
import f2 from "../img/feature2-hospital.avif"
import f3 from "../img/feature3-homepng.png"
import f4 from "../img/feature4-ladynurse.png"
import f5 from "../img/feature5-records.png"

import "./signup.css"
import "./Homepage1.css"


export default function Signin() {
    return (
        <>
            <div className="signup-container">

                {/* -----------------------item1------------------------- */}
                <div className="signup-item1">
                    <div className="signup-l1">The Next Generation</div>
                    <div className="signup-l2">Of Any Health Concern</div>
                    {/* <div className="signup-potrait"><img src={signupimage} alt="" /></div> */}
                    <div className="home-page-1-feature-container" style={{ margin: "3% 0px" }}>
                        <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f1} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Search Doctor</div></div>
                        <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f2} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Search Clinic</div></div>
                        <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f3} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Home Visits</div></div>
                        <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f4} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Track Health</div></div>
                        <div className="home-page-feature"><img style={{ backgroundColor: "white" }} src={f5} alt="Img Not Loaded" /><div className="hm-pg-feature-name">Health Records</div></div>
                    </div>
                </div>
                {/* -----------------------item2------------------------- */}
                <div className="signup-item2" style={{ margin: "5% 0px" }}>
                    <div style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Get Acces To Account</div>
                    <Form >

                        {/* ----- --------Email------ ------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontWeight: "600" }}>Email address</Form.Label>
                            <Form.Control style={{ width: "300px" }} type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
                        </Form.Group>
                        {/* ----- --------Mobile Number------ ------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontWeight: "600" }}>Mobile Number</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
                        </Form.Group>

                        {/* ----- --------Password------ ------ */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontWeight: "600" }}  >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            {/* ----- --------Check Button------ ------ */}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
