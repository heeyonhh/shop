import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      let 번호 = state.findIndex((a)=>{ return a.id == action.payload })
      state[번호].count++
    },
    //id 번호랑 페이로드 번호 같은지 찾아서 확인 후 +
    addItem(state, action){
      state.push(action.payload)
    }
    //cart 에 상품 추가하기
  }
})

export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  } 
}) 