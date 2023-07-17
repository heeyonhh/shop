import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addItem } from '../store';
import { useDispatch } from 'react-redux';


function Detail(props) {

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (x) { return x.id == id });
    let [alert, setAlert] = useState(true);
    let [탭, 탭변경] = useState(1);
    let [fade2, setFade2] = useState('');
    let dispatch = useDispatch();


    //최근 본 상품 id 로컬 스토리지에 추가하기 set array로 중복 id는 추가하지 않기
    useEffect(()=>{
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(찾은상품.id)
        //Set으로 바꿨다가 다시 array로 만들기
        꺼낸거 = new Set(꺼낸거)
        꺼낸거 = Array.from(꺼낸거)
        localStorage.setItem('watched', JSON.stringify(꺼낸거))
      }, [])

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false) }, 10000)
        return () => {
            clearTimeout(a)
        }
    }, [])

    useEffect(()=>{
        setTimeout(()=>{setFade2('end')},100)
        return()=>{
            setFade2('');
        }
    },[])

    return (
        <>
            <Container className={'start ' + fade2}>
                {
                    alert == true
                        ? <div className='alert alert-warning'>
                            10초 이내 구매시 할인
                        </div>
                        : null
                }
            </Container>
            <Container className={'start ' + fade2}>
                <Row>
                    <Col sm>
                        <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%" />
                    </Col>
                    <Col sm>
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <button className="btn btn-danger" onClick={()=>{
                            dispatch(addItem({id : 4, name : 'Enzo Blues', count : 12}))
                        }}>주문하기</button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent 탭={탭}/>
        </>
    )
};

function TabContent({ 탭 }) {

    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100)

        return ()=>{
            setFade('')
        }
    }, [탭])

    return (<div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>)
};

export default Detail;