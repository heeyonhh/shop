import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : { name : 'kim', age : 20 },
  reducers : {
    changeName(state){
      // return { name : 'park', age : 20 }
      state.name = 'park'
    },
    increase(state, a){
      state.age += a.payload
    },
  }
})
//디스패치 변경 함수에 파라미터 뚫어보기 increase(10) a.payload 화물 소포 택배 파라미터 작명 action으로 많이 함

export let { changeName, increase } = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  } 
}) 