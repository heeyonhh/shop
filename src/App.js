import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light" className='nav'>
        <Container>
          <Navbar.Brand href="#home">EQL STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 이동 버튼 */}
      <Link to="/">Home</Link>
      <Link to="/detail">상세페이지</Link>

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
        <Route path="/detail" element={<div>상세페이지임</div>} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>

    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={'https://heeyonhh.github.io/shop/src/img/' + (props.i + 1) + '.jpeg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
};

export default App;