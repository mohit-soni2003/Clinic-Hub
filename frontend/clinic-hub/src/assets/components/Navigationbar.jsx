import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Navigationbar.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../img/logo.png"

export default function Navigationbar() {
  return (
    <div className='navigation-bar' style={{backgroundColor:"#d4d4d4"}}>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"#2a5da8", fontWeight:"600" , fontSize:"1.8rem" , textShadow:"1px 1px 2px #a6eded"}}><img style={{width:"50px"}} src={logo} alt="" /> ClinicHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">AboutUs</Nav.Link>
            <Nav.Link href="#action2">Pharmacy</Nav.Link>
            <Nav.Link href="#action2">LabTests</Nav.Link>
            <Nav.Link href="#action2">Reports</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
            <div className="auth-container">
            <Button variant="outline-primary auth-btn">Login</Button>
            <Button variant="outline-primary auth-btn">Register</Button>
            </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
