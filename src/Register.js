import React from 'react';
import './Register.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="registerKeliye">
            <Card border="warning" style={{ width: '34rem' }}>
            <Card.Header style={{textAlign: 'center', backgroundColor: '#f5a81a', fontSize: '20px'}}><Link to="/">IzuTracker</Link></Card.Header>
  
  <Card.Body>
    <Card.Title style={{textAlign: 'center', fontSize: '40px',fontWeight: '600'}}>REGISTER</Card.Title>
    <Form>
    <Row>
    <Col>
    <Form.Group className="mb-3" as={Col}>
    <Form.Label>First name</Form.Label>
      <Form.Control placeholder="First name" />
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" as={Col}>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
    <Form.Group className="mb-3" as={Col}>
    <Form.Label>Year</Form.Label>
      <Form.Control type="number" placeholder="Year" />
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" as={Col}>
    <Form.Label>Department</Form.Label>
      <Form.Control placeholder="Department" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
      <Col>
  <Form.Group className="mb-3" as={Col}>
      <Form.Label>Register Number</Form.Label>
      <Form.Control type="number" />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" as={Col}>
      <Form.Label>Batch</Form.Label>
      <Form.Control Placeholder="Like 2016-2020..." />
    </Form.Group>
    </Col>
    </Row>
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
  <div style={{textAlign: 'center'}}>
  <Button className="registerButton" variant="warning" type="submit">
  <Link to="./Dashboard">REGISTER</Link>
  </Button>
  </div>
</Form>
    <div style={{textAlign: 'center', paddingTop: '10px'}}>
    <Link to ="./Login">Already have an Account? Click <strong style={{color: '#f5a81a'}}>here</strong> to Login!</Link>
    </div>
  </Card.Body>
</Card>
        </div>
    )
};

export default Register;
