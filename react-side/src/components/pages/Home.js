import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    props.history.push('/');
  };
  return (
    <div>
      <h1>메인페이지</h1>
      {localStorage.getItem('ACCESS_TOKEN') ? (
        <Nav className="me-auto">
          <Link onClick={logout} className="nav-link">
            임시 로그아웃
          </Link>
        </Nav>
      ) : (
        <Nav className="me-auto">
          <Link to="/LoginForm" className="nav-link">
            임시 로그인
          </Link>
        </Nav>
      )}
    </div>
  );
};

export default Home;
<h1>메인페이지</h1>;
