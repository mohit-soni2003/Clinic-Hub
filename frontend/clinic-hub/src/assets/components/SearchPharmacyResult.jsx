import { React, useState, useEffect } from 'react'
import Navigationbar from './Navigationbar';
import Button from 'react-bootstrap/Button';
import "./SearchPharmacyResult.css"
import logo from "../img/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../img/image.png"
import map from "../img/map.png"
//---------tihs imports for search container-------------
import Form from 'react-bootstrap/Form';
import "./Searchcontainer.css"
import "./Searchcontainer.css"
import { useNavigate } from "react-router-dom"

export default function SearchPharmacyResult() {
    const navigate = useNavigate()
    //--------this is search container -----------------
    // -------------handle search variable and onchange function------------
    const [city, setcity] = useState()
    const [servicetype, setservicetype] = useState()
    const [name, setname] = useState()
    const [data, setdata] = useState([])
    const handlecitychange = (event) => {
        console.log(event.target.value)
        setcity(event.target.value)
    }
    const handleservicetypechange = (event) => {
        console.log(event.target.value)
        setservicetype(event.target.value)
    }
    const handlenamechange = (event) => {
        console.log(event.target.value)
        setname(event.target.value)
    }
    // ----------------------post data to server to search -------------------

    const searchpost = () => {
        fetch("http://localhost:5000/search", {
            // fetch("https://clinic-hub-server.vercel.app/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                serviceType: servicetype, 
                city: city
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);  // Log the result to check its structure
                if (Array.isArray(result)) {
                    setdata(result);
                } else {
                    console.error("Expected an array but got:", result);
                    setdata([]);  // Set to an empty array if result is not an array
                }
            })
            .catch(err => console.log(err));
    }


    const searchResultRender = () => {
        if (servicetype == "pharmacy") {
            return (
                <>
                    <div style={{ fontSize: "40px" }}>Pharmacy</div>
                    <div className="search-pharmacy-result">
                        <div className="display-pharmacy-filter"></div>
                        <div className="pharmacy-result-container">
                            {/* ----------- --------- ------------item1 of cards of pharma ---------------------------- */}


                            <div className="pharmacy-result-item1">
                                {console.log(data)}
                                {data.map((pharmastore) => {
                                    return (
                                        <div className="pharmacy-result-card">
                                            <div className="pharma-logo"><img src={logo} alt="" /></div>
                                            <div className="pharma-content">
                                                <div className="pharma-name">{pharmastore.name}</div>
                                                <div className="opening-time">Mon - Sat {pharmastore.openingTime}AM - {pharmastore.closingTime}PM</div>
                                                <div className="feature-container">
                                                    <div className="pharma-feature" id='f1'>Free home delievery</div>
                                                    <div className="pharma-feature" id='f2'>Paymant modes</div>
                                                    <div className="pharma-feature" id='f3'>Instant Delievery</div>
                                                </div>
                                                <div className="offer-view-container">
                                                    <div className="pharma-offer">10%</div>
                                                    <div className="view-detail-btn"><Button className="Primary">View Details</Button></div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                            {/* ----------- --------- ------------item2 of cards of map location ---------------------------- */}
                            <div className="pharmacy-result-item2 " id='map'> </div>

                        </div>
                    </div>
                </>
            )
        }
        else if (servicetype == "doctor") {
            return (
                <>
                    <div style={{ fontSize: "40px" }}>Doctor</div>
                    <div className="search-pharmacy-result">
                        <div className="display-pharmacy-filter"></div>
                        <div className="pharmacy-result-container">
                            {/* ----------- --------- ------------item1 of cards of pharma ---------------------------- */}

                            <div className="pharmacy-result-item1">
                                {console.log(data)}
                                {data.map((doctor) => {
                                    return (
                                        <div className="pharmacy-result-card">
                                            <div className="pharma-logo">
                                                <img src={doctor.image} alt="" />
                                                <div className="expierence">
                                                    {doctor.experience}
                                                </div>
                                            </div>
                                            <div className="pharma-content">
                                                <div className="pharma-name">{doctor.name}</div>
                                                <div className="opening-time">{doctor.qualification}</div>
                                                <div className="doctor-speciality" id='f1'>{doctor.speciality}</div>
                                                <div className="doctor-fees">200$</div>
                                            </div>
                                            <div className="doctor-btn-container">
                                                <i class="bi bi-share share-icon"></i>
                                                <Button variant="outline-primary bk-apt">Chat Now</Button>
                                                <Button onClick={() => navigate("/doctor")} className='primary bk-apt'>Book Appointment</Button>
                                                <div className="doctor-status">Status : <span style={{ color: "blue" }}>{doctor.status}</span></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                            {/* ----------- --------- ------------item2 of cards of map location ---------------------------- */}
                            <div className="pharmacy-result-item2 " id='map'> </div>

                        </div>
                    </div>
                </>
            )
        }
        else if (servicetype == "hospital") {
            return (
                <><div style={{ fontSize: "40px" }}>Hospital</div></>
            )
        }
        else if (servicetype == "clinic") {
            return (
                <>
                    <div style={{ fontSize: "40px" }}>Clinic</div>
                    <div className="search-pharmacy-result">
                        <div className="display-pharmacy-filter"></div>
                        <div className="pharmacy-result-container">
                            {/* ----------- --------- ------------item1 of cards of pharma ---------------------------- */}


                            <div className="pharmacy-result-item1">
                                {console.log(data)}
                                {data.map((clinic) => {
                                    return (
                                        <div className="pharmacy-result-card">
                                            <div className="pharma-logo"><img src={clinic.image} alt="" /></div>
                                            <div className="pharma-content">
                                                <div className="pharma-name">{clinic.name}</div>
                                                <div className="opening-time">Mon - Sat 9:00AM - 12:00PM</div>
                                                <div className="feature-container">
                                                    <div className="pharma-feature" id='f1'>Child Specialist</div>
                                                    <div className="pharma-feature" id='f2'>Vaccination</div>
                                                    <div className="pharma-feature" id='f3'>Bed for Drip</div>
                                                </div>
                                                <div className="offer-view-container">
                                                    <div className="clinic-status">Status : {clinic.status}</div>
                                                    <div className="clinic-status">Waiting : 10</div>
                                                    <div className="view-detail-btn"><Button className="Primary" onClick={()=>navigate("/clinic")}>Book Appointment</Button></div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                            {/* ----------- --------- ------------item2 of cards of map location ---------------------------- */}
                            <div className="pharmacy-result-item2 " id='map'> </div>

                        </div>
                    </div>
                </>
            )
        }
    }

    // ------------------------MAP RENDERER FOR RESULT ------------------------
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvTKOYb7g0JTCXMceunRr8I2YDv7tmwes&callback=initMap&libraries=places";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Define the initMap function globally
        window.initMap = () => {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 22.683, lng: 76.818 },
                zoom: 8,
            });

            const marker = new google.maps.Marker({
                position: { lat: 22.683, lng: 76.818 },
                title: "This is test marker",
                map: map,
            });
        };

        // Cleanup script element on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, [data]);
    

    return (
        <>
            <Navigationbar></Navigationbar>
            <div className="search-result-page">
                <div className="search-field-container">

                    <div className="fields" >
                        <div className='search-fields-heading'>select city</div>
                        <Form.Select aria-label="Select Your City" onChange={handlecitychange} style={{ border: "none", textAlign: "center", fontSize: "1.2rem", color: "#086bc7", fontWeight: "bold" }}>
                            <option value="" >All</option>
                            <option value="Indore">Indore </option>
                            <option value="Ujjain">Ujjain</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Bhopal">Bhopal</option>
                        </Form.Select>
                    </div>

                    <div className="fields" style={{ borderLeft: "1px solid gainsboro" }}>
                        <div className='search-fields-heading'>Select Hospital, Clinic, Doctor , Pharmacy </div>
                        <Form.Select aria-label="Select Service needed" onChange={handleservicetypechange} style={{ border: "none", textAlign: "center", fontSize: "1.2rem", color: "#086bc7", fontWeight: "bold" }}>
                            <option value="">Select Service Needed</option>
                            <option value="pharmacy">Pharmacy</option>
                            <option value="clinic">Clinic</option>
                            <option value="hospital">Hospital</option>
                            <option value="doctor">Doctor</option>
                        </Form.Select>
                    </div>
                    <div className="fields" style={{ borderLeft: "1px solid gainsboro" }}>
                        <div className='search-fields-heading'> Search doctor, Clinic and hospital</div>
                        <Form.Control onChange={handlenamechange} type="text" placeholder="Select doctor,hospital,clinic" style={{ border: "none", textAlign: "center", fontSize: "1.2rem", color: "#086bc7", fontWeight: "500" }} />
                    </div>
                    <div className="temp1">
                        <Button variant="primary" onClick={() => { searchpost() }}>Search</Button>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {searchResultRender()}

         
        </>
    )
}
