import {React , useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigationbar from './Navigationbar';
import f1 from "../img/feature1-doctor.avif"
import f2 from "../img/feature2-hospital.avif"
import f3 from "../img/feature3-homepng.png"
import f4 from "../img/feature4-ladynurse.png"
import f5 from "../img/feature5-records.png"

import "./signup.css"
// import "./Homepage1.css"


export default function Signin() {

    const navigate = useNavigate();


// --------HANDLING USESTATE VARIABLES AND FUNCTION-------------

    const [email, setemail] = useState();
    const [phone, setphone] = useState();
    const [password, setpassword] = useState();
    const [checkstate,setcheckstate ] = useState(false);

    const handleemailchange = (event)=>{
        console.log(event.target);
        setemail(event.target.value);
    }
    const handlephonechange = (event)=>{
        console.log(event.target);
        setphone(event.target.value);
    }
    const handlepasswordchange = (event)=>{
        console.log(event.target);
        setpassword(event.target.value);
    }
    const handlecheckstate =(event)=>{
        console.log(event.target.checked);
        setcheckstate(event.target.checked);
    }

    // ------------SENDING DATA TO SERVER ---------

    const postdata = (event)=>{
        event.preventDefault();
        if(!email || !phone || !password ){
            notifyE("Please Enter all Fields")
            return console.log("Please Enter all Fields");
        }
        if(checkstate==false){
            notifyE("Please accept terms and condition")
            return console.log("Please accept terms and condition");
        }
        else{
            console.log("Logging Scuccessful")
            notifyS("Login Successful")
            navigate("/patientdashboard")
        }

    }
    const notifyS = (msg) => toast.success(msg)
    const notifyE = (msg) => toast.error(msg)

    return (
        <>

            <Navigationbar></Navigationbar>
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
                            <Form.Control style={{ width: "300px" }} type="email" placeholder="Enter email"  onChange={handleemailchange}/>

                        </Form.Group>
                        {/* ----- --------Mobile Number------ ------ */}
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label style={{ fontWeight: "600" }}>Mobile Number</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone" onChange={handlephonechange} />
                        </Form.Group>

                        {/* ----- --------Password------ ------ */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontWeight: "600" }}  >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={handlepasswordchange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I accept terms and condition" onChange={handlecheckstate} />
                            {/* ----- --------Check Button------ ------ */}
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={postdata}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
