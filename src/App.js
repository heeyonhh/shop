import './App.css';
import data from './data.js';
import Detail from './components/Detail';

import { createContext, useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

//context api
//1.보관함
export let Context1 = createContext();

function App() {

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);

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
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
              
              axios.post('/url', {name: 'kim'})

            }}>더보기</button>
          </>
        } />

        {/* 2. 전송할 컴포넌트에 Context1.Provider로 감싸고 state 넣어주기 그러면 디테일안에 있는 자식 컴포넌트도 프롭스 없이 쓸수 있음 */}
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

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