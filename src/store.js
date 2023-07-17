import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : { name : 'kim', age : 20 },
  reducers : {
    changeName(state){
      // return { name : 'park', age : 20 }
      state.name = 'park'
    },
    increase(state){
      state.age += 1
    },
  }
})
//array, object의 경우 직접 수정해도 state변경됨 -> 그래서 문자 하나만 필요해도 일부러 {} 안에 담기도함 return없이 수정되서

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