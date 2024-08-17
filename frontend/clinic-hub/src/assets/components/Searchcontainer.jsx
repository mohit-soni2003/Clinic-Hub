import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import "./Searchcontainer.css"
import Button from 'react-bootstrap/Button';


export default function Searchcontainer() {

   

    // -------------handle search variable and onchange function------------
    const [city, setcity] = useState()
    const [servicetype, setservicetype] = useState()
    const [name, setname] = useState()
    const [data, setdata] = useState()
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

    const searchpost=()=>{

        fetch("http://localhost:5000/search",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name:name,
                    serviceType:servicetype,
                    city:city
                })
            }
        ).then(res => res.json())
        .then((result) => {
          console.log(result)
          setdata(result)
        })
        .catch(err => console.log(err))
        
    }
    return ( 
        <>
            <div className="search-result-page">
                <div className="search-field-container">

                    <div className="fields" >
                        <div className='search-fields-heading'>select city</div>
                        <Form.Select aria-label="Select Your City" onChange={handlecitychange} style={{ border: "none", textAlign: "center", fontSize: "1.2rem", color: "#086bc7", fontWeight: "bold" }}>
                            <option>select your city</option>
                            <option value="Indore">Indore </option>
                            <option value="Ujjain">Ujjain</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Bhopal">Bhopal</option>
                        </Form.Select>
                    </div>

                    <div className="fields" style={{ borderLeft: "1px solid gainsboro" }}>
                        <div className='search-fields-heading'>Select Service</div>
                        <Form.Select aria-label="Select Service needed" onChange={handleservicetypechange} style={{ border: "none", textAlign: "center", fontSize: "1.2rem", color: "#086bc7", fontWeight: "bold" }}>
                            <option>Select Service Needed</option>
                            <option value="pharmacy">Pharmacy</option>
                            <option value="clinic">Clinic</option>
                            <option value="hospital">Hospital</option>
                            <option value="doctor">Doctor</option>
                        </Form.Select>
                    </div>
                    <div className="fields" style={{ borderLeft: "1px solid gainsboro" }}>
                        <div className='search-fields-heading'> Search doctor, Clinic and hospital</div>
                        <Form.Control onChange={handlenamechange}  type="text" placeholder="Select doctor,hospital,clinic" style={{ border: "none", textAlign: "center", fontSize: "1.2rem", color: "#086bc7", fontWeight: "500" }} />
                    </div>
                    <div className="temp1">
                        <Button variant="primary" onClick={()=>{searchpost()}}>Search</Button>
                    </div>
                </div>
              
            </div>
        </>
    )
}
