import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';

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
          <Card shoes={shoes[0]} i={1}/>
          <Card shoes={shoes[1]} i={2}/>
          <Card shoes={shoes[2]} i={3}/>
        </Row>
      </Container>
    </div>
  );
}

//props 문법으로 이미지 바꾸기 url 변경 되는 부분에 ''+ props.i +''
function Card(props){
  return(
    <Col sm>
      <img src={'https://heeyonhh.github.io/shop/src/img/'+ props.i +'.jpeg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
};

export default App;