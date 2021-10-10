import React from 'react';
import './Login.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="orgLogin">
            <Card className="cardforlogin" border="warning">
  <Card.Body>
    <Card.Title style={{textAlign: 'center', fontSize: '35px',fontWeight: '700'}}>LOGIN</Card.Title>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <div style={{textAlign: 'center', marginTop: '60px'}}>
  <Button className="loginButton" variant="warning" type="submit">
    LOGIN
  </Button>
  </div>
</Form>
<div style={{textAlign: 'center', paddingTop: '10px'}}>
    <Link to="/Register">Do not have an Account? Click <strong style={{color: '#f5a81a'}}>here</strong> to Register.</Link>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Login;
