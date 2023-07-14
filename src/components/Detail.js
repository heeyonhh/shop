import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });
    let [count, setCount ] = useState(0);
    let [alert, setAlert ] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 2000)
    }, [])
    //[]useEffect 실행조건 넣을수 있는 곳 디펜던시/ count 가 업데이트 될때 / 1회만 실행되고 싶으면 [] 비어 놓기

    //동적 ui만들기
    //1.ui상태 저장할 state 만들고
    //2.state에 따라서 ui가 어떻게 보일지 작성

    return (
        <>
            <Container>
                {
                    alert == true
                    ? <div className='alert alert-warning'>
                        2초 이내 구매시 할인
                     </div>
                    : null
                }
            </Container>
            <Container>
                <button onClick={()=>{ setCount(count+1) }}>버튼</button>
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
        </>
    )
};

export default Detail;