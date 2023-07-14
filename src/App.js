import './App.css';
import data from './data.js';

import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

import Detail from './components/Detail';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();
  //페이지 이동 도와주는 훅 gkatn

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light" className='nav'>
        <Container>
          <Navbar.Brand href="/">EQL STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-menu" to="/">Home</Link>
            <Link className="nav-menu" to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' />
            <Container>
              <Row>
                {shoes.map(function (a, i) {
                  return (
                    <Card shoes={shoes[i]} i={i} />
                  )
                })}
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>

    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img className="detailimg" src={'https://heeyonhh.github.io/shop/src/img/' + (props.i + 1) + '.jpeg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
};

export default App;