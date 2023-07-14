import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';

function Detail() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm>
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </Col>
                    <Col sm>
                        <h4 className="pt-5">상품명</h4>
                        <p>상품설명</p>
                        <p>120000원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Detail;