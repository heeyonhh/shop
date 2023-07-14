import './App.css';
import data from './data.js';
import Detail from './components/Detail';

import { useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

//ajax : get post 요청
function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

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
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                console.log(결과.data)
              })
              .catch(()=>{
                console.log('실패함')
              })
            }}>버튼</button>
          </>
        } />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About/>} >
          <Route path="/about/member" element={<div>멤버임</div>} />
          <Route path="/about/location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="/event" element={<Event/>} >
          <Route path="/event/one" element={<div>첫주문시 양배추즙 서비스</div>} />
          <Route path="/event/two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>
        
        <Route path="*" element={<div>URL을 확인해주세요 !</div>} />
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

function Event(){
  return(
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
};

function About(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
};

export default App;