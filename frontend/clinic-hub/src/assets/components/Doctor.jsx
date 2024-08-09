import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup, Form } from 'react-bootstrap';
import image from "../img/image.png"
import map from "../img/map.png"
import Navigationbar from './Navigationbar';


export default  function Doctor()  {
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
                                    <Image src="https://images.pexels.com/photos/14438788/pexels-photo-14438788.jpeg?auto=compress&cs=tinysrgb&w=600"  fluid />
                                </Col>
                                <Col md={8}>
                                    <Card.Title>Dr. Asha Susowat</Card.Title>
                                    <Card.Text>
                                        <p><strong>MD, Surgeon</strong></p>
                                        <p>MBBS - Obstetrics & Gynecology</p>
                                        <p>Languages: English, Hindi</p>
                                        <p>Experience: 10 years</p>
                                        <p>Rating: ★★★★★ (150 reviews)</p>
                                    </Card.Text>
                                </Col>
                            </Row>
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
                                        <Form.Check type="radio" id="inPerson" label="In-person - ₹1200" />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Form.Check type="radio" id="videoConsult" label="Video Consult - ₹800" />
                                    </ListGroup.Item>
                                </ListGroup>

                                <hr />

                                <Form.Group controlId="chooseCity">
                                    <Form.Label>Choose City</Form.Label>
                                    <Form.Control as="select">
                                        <option>San Jose</option>
                                        <option>Other City 1</option>
                                        <option>Other City 2</option>
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
