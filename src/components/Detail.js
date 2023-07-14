import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//useEffect 부가기능 훅 -> 안에 있는 코드는 html에 있는 코드 렌더링 후에 동작 빠른 로딩 장점
//어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착할때 씀
//컴포넌트의 라이프사이클 / 컴포넌트에 갈고리 다는 법 /아래는 옛날 방법
//mount update unmount
// class Detail2 extends React.Component {
//     componentDidMount(){
//       //Detail2 컴포넌트가 로드되고나서 실행할 코드
//     }
//     componentDidUpdate(){
//       //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
//     }
//     componentWillUnmount(){
//       //Detail2 컴포넌트가 삭제되기전에 실행할 코드
//     }
//   }

function Detail(props) {

    useEffect(()=>{
        console.log('안녕')
    })

    let [count, setCount ] = useState(0);

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });

    return (
        <>
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