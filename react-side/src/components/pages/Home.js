import React, { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Pagination,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const logout = () => {
    localStorage.clear();
    props.history.push('/');
  };

  useEffect(() => {
    if (
      localStorage.getItem('exp') != null &&
      localStorage.getItem('exp') < Date.now()
    ) {
      alert('로그인 시간이 만료되어 로그아웃 되었습니다.');
      localStorage.clear();
      props.history.push('/');
    }
  }, [props]);
  return (
    <Container className="col-md-12 col-md-offset-3">
      <Row>
        <Col sm={3}>
          <div>
            <h1>메인페이지</h1>
            {localStorage.getItem('Authorization') ? (
              <Nav className="me-auto">
                <h3>어서오세요 {localStorage.getItem('nickname')}님</h3>
                <Button variant="dark" onClick={logout}>
                  임시 로그아웃
                </Button>
              </Nav>
            ) : (
              <Nav className="me-auto">
                <Link to="/LoginForm" className="nav-link">
                  임시 로그인
                </Link>
                <Link to="/JoinForm" className="nav-link">
                  회원가입
                </Link>
              </Nav>
            )}
          </div>
        </Col>
        <Col sm={8}>
          <div class="col-12 border-left">
            <Card>
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Pagination className="justify-content-center">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
            {localStorage.getItem('Authorization') ? (
              <Link to="/BoardForm" className="nav-link">
                글쓰기
              </Link>
            ) : (
              <p></p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
<h1>메인페이지</h1>;
