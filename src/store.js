import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 

//redux 는 리액트 버전 18.1 이상이여야함. store 파일 만들어서 위에 데이터 import 후 index에 provider 감싸기