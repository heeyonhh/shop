import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';

function App() {
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

      <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')'}} />
      {/* <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" /> 외부링크 끌어오기*/}
      
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