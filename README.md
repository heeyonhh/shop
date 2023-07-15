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

- useEffect 함수 / 컴포넌트의 인생 Lifecycle

  1. 생성이 될 수도 있고 (전문용어로 mount)

  2. 재렌더링이 될 수도 있고 (전문용어로 update)
  
  3. 삭제가 될 수도 있음 (전문용어로 unmount)
 
  컴포넌트의 인생을 배우는 이유는 컴포넌트 인생 중간에 간섭할 수 있기 때문 ㅋㅋ
 
- Lifecycle hook

  옛날 React에서 Lifecycle hook 쓰는 법
  
        class Detail2 extends React.Component {
          componentDidMount(){
            //Detail2 컴포넌트가 로드되고나서 실행할 코드
          }
          componentDidUpdate(){
            //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
          }
          componentWillUnmount(){
            //Detail2 컴포넌트가 삭제되기전에 실행할 코드
          }
        }

  중요한건 요즘 ! 콜백함수 추가해서 안에 코드 적으면 컴포넌트가 mount & update시 실행

      import {useState, useEffect} from 'react';
      
      function Detail(){
      
        useEffect(()=>{
          //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
        });
        
        return (생략)
      }

  useEffect 안에 적은 코드는 html 렌더링 이후에 동작

  html 렌더링이 빠른 사이트를 원하면 그외 쓸데없는 것들은 useEffect 안에 넣자

  오래걸리는 반복 연산 / 서버에서 데이터 가져오는 작업 / 타이머 같은 것

- 유즈 이펙트 활용

      function Detail(){
      
        let [alert, setAlert] = useState(true)
        useEffect(()=>{
          setTimeout(()=>{ setAlert(false) }, 2000)
        }, [])
      
        return (
        {
          alert == true
          ? <div className="alert alert-warning">
              2초이내 구매시 할인
            </div>
          : null
        })}

- clean up function : useEffect 안에 있는 코드를 실행하기 전에

  return ()=>{ } 안에 있는 코드를 실행해줍니다.

- [] 비워두면 1회 실행 [] 안에 변수나 state가 변할때만 useeffect안의 코드 실행해줌

  [] 안에 state 여러개 넣을 수 있음

  1. 재랜더링 마다 코드 실행 가능

      useEffect(()=>{ 실행할코드 })

  2. 컴포넌트 mount시 1회만 실행 가능
      
      useEffect(()=>{ 실행할코드 }, [])

  3. 유즈이펙트 안의 실행 전에 항상 실행
 
      useEffect(()=>{ 
        return ()=>{
          실행할코드
        }})
 
  4. unmount시 1회 실행

      useEffect(()=>{ 
        return ()=>{
          실행할코드
        }
      }, [])

  5. state1이 변경될 때만 실행

      useEffect(()=>{ 
        실행할코드
      }, [state1])

- isNaN(num) 함수 : 숫자가 아니냐 ?

      function Detail(){
        let [num, setNum] = useState('')
      
        useEffect(()=>{
          if (isNaN(num) == true){
            alert('그러지마세요')
          }
        }, [num])
      
        return (
          <input onChange((e)=>{ setNum(e.target.value) }) />
        )}

- ajax : 새로고침 없이 겟 포스트를 요청 데이터를 주고 받을수 있게 도와주는 브라우저 기능

  어떤 데이터 인지 (url 형식으로) 어떤 방법으로 요청할지 (get or post)

  데이터 가져올때 겟 / 데이터 서버로 보낼때 포스트

  1. XMLHttpRequest라는 옛날 문법 쓰기

  2. fetch() 라는 최신 문법 쓰기
  
  3. axios 같은 외부 라이브러리 쓰기
 
  npm install axios 셋팅

- ajax 요청 방법 (catch는 실패했을때 실행할 코드)

      import axios from 'axios'

      function App(){
        return (
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
              console.log(결과.data)
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>버튼</button>
        )}

- 서버에서 데이터 가져와서 html 생성해보기

      import axios from 'axios'
      
      function App(){
      
        let [shoes, setShoes] = useState(어쩌구);
        return (
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
              let copy = [...shoes, ...결과.data]
              setShoes(copy)
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>버튼</button>
        )}

  1. 점3개 이용해서 shoes사번 만들기
 
  2. 결과.data도 뒤집기
 
  3. shoes state추가 하기 -> [{ }, { }, { }, { }, { }, { }]
 
- post 요청 방법 : axios.post('URL', {name : 'kim'}).then() (then은 완료시 코드 실행)

- 동시에 ajax 요청 : Promise.all( [axios.get('URL1'), axios.get('URL2')] )

  ajax는 원래 서버와 문자 자료만 주고 받을 수 있음

  object array 못 주고 받지만 따옴표를 쳐놓아 json (문자 취급) 으로 자유롭게 주고 받는 것임

  axios 라이브러리는 JSON -> object/array 변환작업을 자동으로 해줌

- fetch() : 쌩 자바스크립트 문법 겟 포스트 요청

      fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) }

- ??? ajax로 가져온 데이터를 html에 꽂을 때 왜 에러남? 

  1. ajax요청으로 데이터를 가져와서 
  
  2. state에 저장하라고 코드를 짜놨고
  
  3. state를 html에 넣어서 보여달라고 <div> {state.어쩌구} </div> 이렇게 코드 짰습니다.
  
  잘 될 것 같은데 이 상황에서 state가 텅 비어있다고 에러가 나는 경우가 많음
  
  이유는 ajax 요청보다 html 렌더링이 더 빨라서 그럴 수 있습니다. 
  
  state안에 뭐가 들어있으면 보여달라고 if문 같은걸 추가하면 됨


## 0715

- 탭 UI 만들기
