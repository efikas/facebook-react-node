import { Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import _ from 'lodash';

function SignUp(props) {
    const [validated, setValidated] = useState(false);

    const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '2.0rem' }}>
                    Sign Up
                    <div style={{ fontSize: '15px', fontWeight: 'normal' }}>It’s quick and easy.</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Mobile number or email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="New password"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a password.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Select className="mb-3">
                                {months.map(value => <option key={value} value={value}>{value}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Select className="mb-3">
                                {_.range(1, 32).map(value => <option key={value} value={value}>{value}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Select className="mb-3">
                                {_.range(1960, 2022).reverse().map(value => <option key={value} value={value}>{value}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>

                        {['Female', 'Male', 'Custom'].map((val) => (
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <div key={val} className="mb-3">
                                    <Form.Check className="radio-div" type={'radio'} id='gender'>
                                        <Form.Label className="radio-label">{val}</Form.Label>
                                        <Form.Check.Input type='radio' name="gender" isValid />
                                    </Form.Check>
                                </div>
                            </Form.Group>
                        ))}
                    </Row>
                    <Form.Group className="mb-3 signin-terms">
                        <Form.Label>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</Form.Label>
                    </Form.Group>
                    <div className="submit-div">
                        <Button type="submit" className="success-btn"  style={{width: '200px', fontWeight: 'bold'}} variant="success">Sign Up</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default SignUp;