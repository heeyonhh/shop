import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
// 함수, 컴포넌트, 모달도 export가능

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

      <div className='main-bg'/>
      
      <Container>
        <Row>
          <Col sm>
            <div className='product'/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </Col>
          <Col sm>
            <div className='product2'/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>{shoes[1].price}</p>
          </Col>
          <Col sm>
            <div className='product3'/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
            <p>{shoes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;