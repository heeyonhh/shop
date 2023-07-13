import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';

function App() {
  return (
    <div className="App">
      {/* classname으로 커스터마이징 가능 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">EQL STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')'}} />
      
      <Container>
        <Row>
          <Col>
            <img src="./img/1.jpeg" width="70%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;