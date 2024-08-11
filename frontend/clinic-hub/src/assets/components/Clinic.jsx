import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup, Form } from 'react-bootstrap';
import image from "../img/image.png"
import map from "../img/map.png"
import clinic from "../img/clinic.jpg"
import Navigationbar from './Navigationbar';
import "./Clinic.css"
import { Navigate, useNavigate } from 'react-router-dom';


export default  function Clinic()  {
  const navigate = useNavigate()
    return (
    <>
    <Navigationbar></Navigationbar>
        <Container className="my-5">
            <Row>
                <Col md={8} >
                    <Card className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col md={4} >
                                    <Image src={clinic}  fluid style={{height:"100%"}}/>
                                </Col>
                                <Col md={8}>
                                    <Card.Title>HealthCare Clinic</Card.Title>
                                    <Card.Text>
                                          <h6>Doctor Available</h6>
                                        <div className="doctor-container">
                                          <div className="doctor-detail">
                                            <div className="doctor-name">Mahesh Bhatia</div>
                                            <div className="doctor-qualification">MBBS MD </div>
                                            <div className="doctor-qualification">Obstetrics & Gynecology</div>
                                            <div className="doctor-expierience">expierence : 10yrs</div>
                                            <div className="doctor-qualification" onClick={()=>{navigate("/doctor")}} style={{color:"blue"}}>Visit Profile</div>
                                          </div>
                                          <div className="doctor-detail">
                                            <div className="doctor-name">Mahesh Bhatia</div>
                                            <div className="doctor-qualification">MBBS MD </div>
                                            <div className="doctor-qualification">Obstetrics & Gynecology</div>
                                            <div className="doctor-expierience">expierence : 10yrs</div>
                                            <div className="doctor-qualification" onClick={()=>{navigate("/doctor")}} style={{color:"blue"}}>Visit Profile</div>
                                          </div>
                                          
                                        </div>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <div className="facilities">
                              <h4>Facilities</h4>
                              <ul>
                                <li>Blood Pressure Checkup</li>
                                <li>General Physician</li>
                                <li>Shugar Checkup</li>
                                <li>Drip Facilities</li>
                                <li>Vaccination For Childreen Available</li>
                              </ul>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Location</Card.Title>
                            <Image src={map} fluid />
                            <Card.Text className="mt-2">
                                Daffodils, by Artemis Hospitals<br />
                                XYZ City, Green Vihar University, Jaipur
                            </Card.Text>
                            <Button variant="primary">Get Directions</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Choose the type of appointment</Card.Title>
                            <Form>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Form.Check type="radio" id="consult" label="In-person - ₹1200" />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Form.Check type="radio" id="consult" label="Video Consult - ₹800" />
                                    </ListGroup.Item>
                                </ListGroup>

                                <hr />

                                <Form.Group controlId="chooseCity"> 
                                    <Form.Label>Choose Doctor</Form.Label>
                                    <Form.Control as="select">
                                        <option>Dr. Mahesh Bhatia</option>
                                        <option>Dr. Shuriti Maheshwari</option>
                                    </Form.Control>
                                </Form.Group>

                                <hr />

                                <Form.Group controlId="chooseTime">
                                    <Form.Label>Choose Time Slot</Form.Label>
                                    <Form.Control as="select">
                                        <option>7 AM - 9 AM</option>
                                        <option>9 AM - 11 AM</option>
                                        <option>11 AM - 1 PM</option>
                                    </Form.Control>
                                </Form.Group>
                                    <br />
                                <p className="waiting">12 People Are Waiting Before You</p>
                                <p className="waiting">30 min approx After You should had to reach s clinic</p>

                                <Button variant="primary" className="mt-3">Book Appointment</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Dr. Oscar's Profile</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                            </Card.Text>

                            <Card.Title>Specialities</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Dentistry</ListGroup.Item>
                                <ListGroup.Item>Cosmetic Dentistry</ListGroup.Item>
                                <ListGroup.Item>Emergency Dentistry</ListGroup.Item>
                                <ListGroup.Item>Endodontics</ListGroup.Item>
                            </ListGroup>

                            <Card.Title className="mt-4">Education</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>1988</strong> - Norwalk Medical Center Albert Einstein College of Medicine Residency Hospital
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>1986</strong> - Columbia University / College of Dental Medicine Medical School
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>1984</strong> - Brooklyn College Undergraduate School
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    );
}
