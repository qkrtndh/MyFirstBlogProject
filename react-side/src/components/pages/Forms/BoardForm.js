import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const BoardForm = (props) => {
  const [board, setBoard] = useState({
    title: '',
    content: '',
  });
  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  const boardadd = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/board', JSON.stringify(board), config)
      .then((res) => {
        if (res.status === 201) {
          alert('등록되었습니다!');
          props.history.push('/');
          return res.json;
        }
        return null;
      })
      .catch((res) => {
        console.log(res);
        alert('등록에 실패했습니다. 로그인상태를 확인해주세요');
        props.history.push('/');
      });
  };
  return (
    <div>
      <Form onSubmit={boardadd}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목을 입력"
            onChange={changeValue}
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            onChange={changeValue}
            name="content"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          등록
        </Button>
      </Form>
    </div>
  );
};

export default BoardForm;
