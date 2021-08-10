import React from 'react';
import { Button, Form } from 'react-bootstrap';
const JoinForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password check</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNickName">
        <Form.Label>NickName</Form.Label>
        <Form.Control type="text" placeholder="NickName" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default JoinForm;
