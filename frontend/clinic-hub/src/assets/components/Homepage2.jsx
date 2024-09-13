import React from 'react'
import "./Homepage2.css"
import temp from "../img/feature4-ladynurse.png"
import Button from 'react-bootstrap/Button';

import hospital from "../img/hospital.png"
import records from "../img/feature5-records.png"
import nurse from "../img/nurse.png"
import doctor from "../img/doctor.png"
import labscan from "../img/labscan.png"
import labtest from "../img/labtest.png"
import medicine from "../img/medicine.png"
import homevisit from "../img/homevisit.png"
import doorstep from "../img/doorstep.png"


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
                                <div className="service hm2-dark">
                                    <img src={doorstep} alt="" />
                                    <div className="service-name">Door Step Service</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={nurse} alt="" />
                                    <div className="service-name">Video Consult</div>
                                </div>
                            </td>

                        </tr>

                        {/* TABLE ROW 3--------- ----------- ------------ ----------- */}
                        <tr>
                            <td></td>
                            <td >
                                <div className="service hm2-dark">
                                    <img src={doctor} alt="" />
                                    <div className="service-name">Search Doctor</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={hospital} alt="" />
                                    <div className="service-name">Search Clinic</div>
                                </div>
                            </td>
                            <td >
                                <div className="service hm2-dark">
                                    <img src={homevisit} alt="" />
                                    <div className="service-name">Home Visits</div>
                                </div>
                            </td>

                        </tr>

                        {/* TABLE ROW 4--------- ----------- ------------ ----------- */}
                        <tr>
                            <td >
                                <div className="service hm2-dark">
                                    <img src={medicine} alt="" />
                                    <div className="service-name">Buy Medicines</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={labscan} alt="" />
                                    <div className="service-name">Book Scan Test</div>
                                </div>
                            </td>
                            <td >
                                <div className="service hm2-dark">
                                    <img src={labtest} alt="" />
                                    <div className="service-name">Book Lab Test</div>
                                </div>
                            </td>
                            <td >
                                <div className="service">
                                    <img src={records} alt="" />
                                    <div className="service-name">Track Medical Record</div>
                                </div>
                            </td>

                        </tr>

                    </table>
                </div>
            </div>
        </>
    )
}
