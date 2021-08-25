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

  const [duple1, setDuple1] = useState('');
  const [duple2, setDuple2] = useState('');
  const [duple, setDuple] = useState({
    username: '',
    nickname: '',
  });
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
    /*setDuple({ [e.target.name]: e.target.value });
    if (e.target.name === 'username') {
      if (e.target.value.length === 0) {
        setDuple1('');
      } else {
        Axios.get(
          'http://localhost:8080/user/username/reduplication',
          JSON.stringify(duple),
          config,
        ).then((res) => {
          setDuple1(res);
        });
      }
    } else if (e.target.name === 'nickname') {
      if (e.target.value.length === 0) {
        setDuple2('');
      } else {
        Axios.get(
          'http://localhost:8080/user/nickname/reduplication',
          JSON.stringify(duple),
          config,
        ).then((res) => {
          setDuple2(res);
        });
      }
    }*/
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
        <Form.Text className="text-muted">{duple1}</Form.Text>
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
      <Form.Text className="text-muted">{duple2}</Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default JoinForm;
