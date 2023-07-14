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
    let [num, setNum] = useState('');

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false)}, 2000)
    })

    useEffect(()=>{
        if(isNaN(num) == true){
            alert('숫자를 입력해주세요!')
        }
    }, [num])

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
                        <input onChange={(e)=>{ setNum(e.target.value) }} />
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