import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const LoginForm = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const changeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  const loginproc = (e) => {
    e.preventDefault();

    Axios.post(
      'http://localhost:8080/login',
      JSON.stringify(user),
      config,
    ).then((res) => {
      if (res.status === 200) {
        alert('로그인성공!');
        console.log(res.data.Authorization);
        localStorage.setItem('Authorization', res.data.Authorization);

        var decodedToken = jwt.decode(
          res.data.Authorization.replace('Bearer ', ''),
          { complete: true },
        );

        localStorage.setItem('exp', decodedToken.payload.exp * 1000);

        axios.defaults.headers.common['Authorization'] = res.data.Authorization;
        props.history.push('/');
      } else {
        alert('로그인실패!');
      }
    });
  };
  return (
    <Form onSubmit={loginproc}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={changeValue}
          name="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={changeValue}
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
