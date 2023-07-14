import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router-dom';

function Detail(props) {

    //유저가 url파라미터에 입력한 정보 가져오기
    let {id} = useParams();

    return (
        <>
            <Container>
                <Row>
                    <Col sm>
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </Col>
                    <Col sm>
                        <h4 className="pt-5">{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price}원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Detail;