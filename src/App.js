import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import a from './data.js';
//State data길어지면 다른 파일 만들어서 export 후 import해서 사용하기 / 여러개면 export {a, b}그대로 가져와야함

function App() {

  let [shoes] = useState();

  return (
    <div className="App">
      {a}
      <Navbar bg="light" data-bs-theme="light" className='nav'>
        <Container>
          <Navbar.Brand href="#home">EQL STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' />
      
      <Container>
        <Row>
          <Col sm>
            <div className='product'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <p className='product2'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <p className='product3'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;