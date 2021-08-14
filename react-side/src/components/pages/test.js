import axios from 'axios';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';

const test = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  const test1 = (e) => {
    e.preventDefault();

    axios
      .get('http://localhost:8080/api/user/test', config)
      .then((res) => {
        alert('test1 성공!');
        console.log(res.data.Authorization);
        localStorage.setItem('ACCESS_TOKEN', res.data.Authorization);
      })
      .catch(() => {
        alert('test1 실패!');
      });
  };

  const test2 = (e) => {
    e.preventDefault();

    axios
      .get('http://localhost:8080/api/admin/test', config)
      .then((res) => {
        alert('test2 성공!');
        console.log(res.data.Authorization);
        localStorage.setItem('ACCESS_TOKEN', res.data.Authorization);
      })
      .catch(() => {
        alert('test2 실패!');
      });
  };
  return (
    <Nav className="me-auto">
      <Button variant="dark" onClick={test1}>
        test1
      </Button>

      <Button variant="dark" onClick={test2}>
        test2
      </Button>
    </Nav>
  );
};

export default test;
