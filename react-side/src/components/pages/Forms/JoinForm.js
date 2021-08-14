import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const JoinForm = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    nickname: '',
  });
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  const joinprocess = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:8080/user', JSON.stringify(user), config)
      .then((res) => {
        if (res.status === 201) {
          alert('가입되었습니다!');
          props.history.push('/LoginForm');
          return res.json;
        }
        return null;
      })
      .catch((res) => {
        console.log(res);
        alert('가입에 실패했습니다');
      });
  };

  const changeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Form onSubmit={joinprocess}>
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

      <Form.Group className="mb-3" controlId="formBasicNickName">
        <Form.Label>NickName</Form.Label>
        <Form.Control
          type="text"
          placeholder="NickName"
          onChange={changeValue}
          name="nickname"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default JoinForm;
