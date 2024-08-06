import React from 'react'
import signupimage from "../img/signup.png"
import "./signup.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Signup() {
  return (
    <>
    <div className="signup-container">

        {/* -----------------------item1------------------------- */}
        <div className="signup-item1">
            <div className="signup-l1">The Next Generation</div>
            <div className="signup-l2">Of Any Health Concern</div>
            <div className="signup-potrait"><img src={signupimage} alt="" /></div>
        </div>
        {/* -----------------------item2------------------------- */}
        <div className="signup-item2">
          <div style={{fontSize:"2.2rem", fontWeight:"bold"}}>Create an Account</div>
          <div style={{fontSize:"1rem", fontWeight:"400" , margin:"2%"}}>Create account today and start using ClinicHub</div>
        <Form>

          {/* ----- --------name------ ------ */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"600"}}>Name</Form.Label>
        <Form.Control style={{width:"300px"}} type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
          {/* ----- --------Email------ ------ */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"600"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
          {/* ----- --------Mobile Number------ ------ */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"600"}}>Mobile Number</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

          {/* ----- --------Password------ ------ */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:"600"}}  >Password</Form.Label>
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
 