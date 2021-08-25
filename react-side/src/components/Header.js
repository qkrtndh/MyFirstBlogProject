import React, { useEffect } from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderList = styled.div`
  background-color: gray;
`;

const IMG = styled.img`
  margin-top: 15px;
`;

const Header = () => {
  return (
    <HeaderList>
      <center>
        <Link to="/">
          <IMG
            src="https://user-images.githubusercontent.com/65153512/128814865-fc6ad8f8-1b5c-42e3-9a7e-b7108e415b3b.png"
            alt="logo"
          />
        </Link>
      </center>

      <Nav activeKey="/home" className="justify-content-between">
        <Nav className="me-auto">
          <Link to="/boardList" className="nav-link">
            회원관리
          </Link>
          <Link to="/" className="nav-link">
            카테고리 수정
          </Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Nav>
    </HeaderList>
  );
};

export default Header;
