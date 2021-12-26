import { Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { BsEyeSlash, BsEye } from "react-icons/bs";
import React, { useState } from 'react';


function LoginCard(props) {
    const [showPassword, toggleShowPassword] = useState(false);

    return (
        <Card style={{ width: '25rem', elevation: 'above' }}>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Control className="mb-3" size="lg" type="text" placeholder="Email or Phone number" />
                        <InputGroup>
                            <FormControl size="lg" type={(showPassword) ? "text" : "password"} placeholder="Password" style={{ borderRightWidth: '0px' }} />
                            <InputGroup.Text style={{ backgroundColor: 'transparent' }}>
                                {(!showPassword) ?
                                    <BsEyeSlash onClick={() => toggleShowPassword(current => !current)} />
                                    :
                                    <BsEye onClick={() => toggleShowPassword(current => !current)} />}
                            </InputGroup.Text>
                        </InputGroup>

                        <div className="d-grid gap-2">
                            <Button className="mt-3 primary-btn" variant="primary" size="lg">
                                Log In
                            </Button>
                        </div>

                        <div className="forgot-pass-div">
                            <a href="">Forgotten password?</a>
                        </div>
                        <div><hr /></div>
                        <div className="forgot-pass-div">
                            <Button className="mt-3 success-btn" 
                            onClick={props.signUp} variant="success" size="lg">
                                Create new account
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default LoginCard;