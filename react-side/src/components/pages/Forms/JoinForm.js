import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const JoinForm = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    nickname: '',
  });

  const joinprocess = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }, //전송할 데이터를 json으로 변경하여 던짐
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 201) {
          return res.json();
        }
        return null;
      })
      .then((res) => {
        if (res !== null) {
          alert('가입되었습니다!');
          props.history.push('/');
        } else {
          alert('등록실패');
        }
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
          name="email"
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
