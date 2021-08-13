import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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
  const loginproc = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }, //전송할 데이터를 json으로 변경하여 던짐
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          return res.json();
        }
        return null;
      })
      .then((res) => {
        if (res !== null) {
          alert('로그인성공!');
          console.log(res.Authorization);
          localStorage.setItem('ACCESS_TOKEN', res.Authorization);
          props.history.push('/');
        } else {
          alert('로그인실패');
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
