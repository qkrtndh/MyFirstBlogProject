import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import BoardForm from './components/pages/Forms/BoardForm';
import JoinForm from './components/pages/Forms/JoinForm';
import LoginForm from './components/pages/Forms/LoginForm';
import Home from './components/pages/Home';
import test from './components/pages/test';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/boardList" exact={true} component={test}></Route>
        <Route path="/LoginForm" exact={true} component={LoginForm}></Route>
        <Route path="/JoinForm" exact={true} component={JoinForm}></Route>
        <Route path="/BoardForm" exact={true} component={BoardForm}></Route>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
