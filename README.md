# react bootstrap 쇼핑몰 구현해보기 🩵


## 0713

- 리액트, 부트스트랩 셋팅

  npx create-react-app shop
  
  npm install react-bootstrap bootstrap
  
  App.js에 import 'bootstrap/dist/css/bootstrap.min.css';
  
  or bootstrap CSS 파일을 index.html 파일의 <head> 태그 안에 복붙

- React-Bootstrap 사용법

  import {Button, Navbar, Container, Nav} from 'react-bootstrap'

  import 후 펑션 < div > 안에 태그 복붙

  className 부여해서 CSS 커스터마이징하는건 자유

- 이미지 넣는 법

  1. className="main-bg" 클라스 네임 붙이고 App.css파일에 url('./이미지경로');

  2. html에서 import 후 'url(' + bg + ')' 작명 문자 넣어주기
  
        import bg from './bg.png'
              
        function App(){
          return (
            <div>
              <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
            </div>
          )}

  < img > 태그 쓰고싶으면 < img src={bg} / >

  3. public 폴더에 있는 이미지 import 안해도 됨
 
     < img src="/logo192.png" / >

- container : 화면 가로 3등분

- public 폴더의 용도

  여러가지 소스 코드는 src 폴더에 보관

  이미지, txt, json 등 수정이 필요없는 static 파일의 경우 public 폴더에 보관

  build 후 public 폴더에 있는 것들은 그대로 보존

- export default / import 문법

  data.js 파일

    let data = 위에있던 긴 array 자료;
    export default data

  App.js 파일

      import data from './data.js';
    
      function App(){
        let [shoes] = useState(data);
      }

- 컴포넌트, props, data export활용
    
      <Card shoes={shoes[0]} i={1} />
      <Card shoes={shoes[1]} i={2} />
      <Card shoes={shoes[2]} i={3} />

      function Card(props){
        return (
          <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.price }</p>
          </div>
        )
      }

  오브젝트자료 props.프롭스작명.오브젝트어레이아이디

  이미지 url에 props 활용 : 자식에 i={1} > ' + props.i + '



## 0714


- Router 페이지 이동 / 셋팅 : npm install react-router-dom@6

  index.js 파일 > <BrowserRouter> 이걸로 <App/> 이걸 감싸기

  App.js > import { Routes, Route, Link }

      <Routes>
        <Route path="/" element={ <div>메인페이지에서 보여줄거</div> } />
        <Route path="/detail" element={ <div>상세페이지임</div> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>

- 라우트에 네비 제외 메인 페이지 넣기

      <Route path="/" element={ 
        <>
         <div className="main-bg"></div>
         <div className="container">
           <div className="row">
             { shoes.map((a, i)=>{
               return <Card shoes={shoes[i]} i={i} ></Card>
              })}
            </div>
          </div> 
        </>
      } />


- Link : a link 와 같음 import 후
      
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

- js 폴더 짜기 : 컴포넌트 끼리, 페이지 라우터 끼리, 함수 js파일은 utils

- useNavigate() : Link랑 똑같음 / 페이지 이동 기능 / import 후

      function App(){
        let navigate = useNavigate()
        
        return (
          (생략)
          <button onClick={()=>{ navigate('/detail') }}>이동버튼</button>
        )}

  useNavigate(-1); : 뒤로 1번가기 / useNavigate(2); : 앞으로 2번가기 기능

- 404페이지 만들기 : 없는 페이지 입니다.

      <Route path="*" element={ <div>없는페이지임</div> } />

- Outlet / nested routes : 서브 경로

      <Route path="/about" element={ <About/> } >  
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
      </Route>
      
      function About(){
        return (
          <div>
            <h4>about페이지임</h4>
            <Outlet></Outlet>
          </div>
        )}

  아울렛 위치가 서브경로 보이는 위치

- 라우터 안에 props 전송

      <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>

  /: = 아무문자

      function Detail(props){
      
        let { id } = useParams();
        let 찾은상품 = props.shoes.find(function(x){
          return x.id == id
        });
      
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>
        </div>  
        )
      };
      
      export default Detail

- styled-components 셋팅 npm install styled-components

import styled from 'styled-components';

      let Box = styled.div`
        padding : 20px;
        color : grey
      `;
      let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
      `;
      
      function Detail(){
        return (
          <div>
            <Box>
              <YellowBtn>버튼임</YellowBtn>
            </Box>
          </div>
        )
      }

  장점 1. css파일 오픈 안해도 됨

  장점 2. 다른 js파일로 오염 안됨

  장점 3. 페이지 로딩 시간 단축

  styled-components 써도 되지만 그CSS파일에서도 다른 JS 파일에 간섭하지 않는 모듈화 기능을 제공

  작명 컴포넌트명.module.css / import해서 쓸 수 있음

- 스타일 컴포넌트 프롭스 문법 지원

      import styled from 'styled-components';
      
      let YellowBtn = styled.button`
        background : ${ props => props.bg };
        color : black;
        padding : 10px;
      `;
      
      function Detail(){
        return (
          <div>
              <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
              <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
          </div>
        )
      }

  이렇게도 가능
  
    let YellowBtn = styled.button` 
      background : ${ props => props.bg };
      color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
      padding : 10px; 
    `;

  단점 1. js 파일이 복잡해짐

  단점 2. css파일과 그렇게 차이는 없을듯

  단점 3. 협업할때 불편할 수 있음
