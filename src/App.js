import './App.css';
import data from './data.js';

import { useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

import Detail from './components/Detail';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();
  //페이지 이동 도와주는 훅 함수 link는 a태그가 생기기 때문에 꼴보기 싫음 이거 써라
  //navigate(-1) 빠꾸 버튼

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light" className='nav'>
        <Container>
          <Navbar.Brand href="/">EQL STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-menu" onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link className="nav-menu" onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
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
        <Route path="/about" element={<About/>} >
          <Route path="/about/member" element={<div>멤버임</div>} />
          <Route path="/about/location" element={<div>위치정보임</div>} />
          {/* nested route : 여러가지 유사한 페이지 필요할때 사용 잘보면 이것도 동적인 ui같은 것임*/}
        </Route>
        <Route path="*" element={<div>URL을 확인해주세요 !</div>} />
        {/* 404페이지 */}
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

function About(){
  return(
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
      {/* nested route보여줄 자리 */}
    </div>
  )
};

export default App;