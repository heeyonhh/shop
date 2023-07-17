import { configureStore, createSlice } from '@reduxjs/toolkit'

//redux의 state변경하는 법
//1.reducers 안에 state수정해주는 함수 만들기
let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(){
      return 'john'
    }
    // 스테이트에 추가로 하고 싶으면
    // changeName(state){
    //   return 'john' + state
    // }
  }
})

export let { changeName } = user.actions
//2. 만든함수 export해야함 (디스트럭쳐링 문법)

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

//등록
export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  } 
}) 