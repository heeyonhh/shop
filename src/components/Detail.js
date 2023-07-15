import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (x) { return x.id == id });
    let [alert, setAlert] = useState(true);
    let [탭, 탭변경] = useState(1);

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false) }, 10000)
        return () => {
            clearTimeout(a)
        }
    }, [])

    return (
        <>
            <Container>
                {
                    alert == true
                        ? <div className='alert alert-warning'>
                            10초 이내 구매시 할인
                        </div>
                        : null
                }
            </Container>
            <Container>
                <Row>
                    <Col sm>
                        <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%" />
                    </Col>
                    <Col sm>
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </Col>
                </Row>
            </Container>

            {/* defaultActiveKey : 기본적으로 눌려 있을 버튼 eventKey : 작명 */}
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

            <TabContent 탭={탭} />
            {/* {
                탭 == 0 ? <div>내용0</div> : null
            } */}
        </>
    )
};

// 일반 조건문 쓰려면 밖에서 컴포넌트로 만들어서 넣기
function TabContent({ 탭 }) {
    // if (props.탭 == 0){
    //     return <div>내용0</div>
    // } else if (props.탭 == 1){
    //     return <div>내용1</div>
    // } else if (props.탭 == 2){
    //     return <div>내용2</div>
    // }
    return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]
};

//동적 ui 만들기 복습 html css 만들고 / 스위치 만들고 / 컴포넌트화 시키거나 안에서 삼항식 / 이벤트 핸들러 or 어레이 셋변경함수 스위치 건들기

//세가지 똑같음 !

export default Detail;