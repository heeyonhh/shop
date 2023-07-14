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
          )
        }

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


- Router :
