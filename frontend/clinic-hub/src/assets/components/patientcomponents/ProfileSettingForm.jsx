import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const ProfileSettingForm = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted!');
    };

    return (
        <>
            <div style={{padding:"2% 1% "}}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={12}>
                            <Form.Group controlId="formProfileImage">
                                <Form.Label>Profile Image</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <i className="bi bi-image"></i>
                                    </InputGroup.Text>
                                    <FormControl type="file" accept="image/*" onChange={handleImageChange} />
                                </InputGroup>
                                {profileImage && (
                                    <div className="mt-2">
                                        <img src={URL.createObjectURL(profileImage)} alt="Preview" width="100" height="100" />
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                    <h2 className="mt-4">Information</h2>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formDateOfBirth">
                                <Form.Label>Date of Birth *</Form.Label>
                                <Form.Control type="date" placeholder="Enter your date of birth" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Phone Number *</Form.Label>
                                <Form.Control type="tel" placeholder="Enter your phone number" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formEmailAddress">
                                <Form.Label>Email Address *</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formBloodGroup">
                                <Form.Label>Blood Group *</Form.Label>
                                <Form.Select aria-label="Default select example" required>
                                    <option value="">Select your blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <h2 className="mt-4">Address</h2>
                    <Row className="mb-3">
                        <Col md={12}>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your address" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formCity">
                                <Form.Label>City *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your city" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formState">
                                <Form.Label>State *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your state" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formCountry">
                                <Form.Label>Country *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your country" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formPincode">
                                <Form.Label>Pincode *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your pincode" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default ProfileSettingForm;