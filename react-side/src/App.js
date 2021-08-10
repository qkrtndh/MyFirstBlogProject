import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import JoinForm from './components/pages/Forms/JoinForm';
import LoginForm from './components/pages/Forms/LoginForm';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/boardList" exact={true} component={''}></Route>
        <Route path="/LoginForm" exact={true} component={LoginForm}></Route>
        <Route path="/JoinForm" exact={true} component={JoinForm}></Route>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
