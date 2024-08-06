import React from 'react'
import "./Homepage2.css"
import temp from "../img/feature4-ladynurse.png"
import Button from 'react-bootstrap/Button';


export default function Homepage2() {
    return (
        <>
            <div className="home-page2">
                <div className="home-page2-services" >
                    <table style={{ margin: "auto" }} >

                        {/* TABLE HEADING--------- ------ -------- ------ ----- */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        {/* TABLE ROW 2--------- ----------- ------------ ----------- */}
                        <tr>
                            <td colspan="2">
                                <div className="special-service">
                                    <div className="service-l1">Quality Healthcare Service Provide By <b>ClinicHub</b></div>
                                    <div className="service-l2">It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope.</div>
                                    <Button variant="outline-info">View All</Button>
                                    </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>

                        </tr>

                        {/* TABLE ROW 3--------- ----------- ------------ ----------- */}
                        <tr>
                            <td></td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>

                        </tr>

                        {/* TABLE ROW 4--------- ----------- ------------ ----------- */}
                        <tr>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={temp} alt="" />
                                    <div className="service-name">Book Ambulance</div>
                                </div>
                            </td>

                        </tr>

                    </table>
                </div>
            </div>
        </>
    )
}
