import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
//css 와 같음 styled-components 장점 이 페이지에서만 적용
//페이지 로딩 시간 단축

//props로 컴포넌트 재활용 가능
let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`
//기존 스타일 복사 가능
// let NewBtn = styled.button(YellowBtn)`

// `

let Box = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props) {

    //유저가 url파라미터에 입력한 정보 가져오기
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });

    return (
        <>
            <Box>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
            </Box>
            <Container>
                <Row>
                    <Col sm>
                        <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품) + '.jpg'} width="100%" />
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