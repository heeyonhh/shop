import { configureStore, createSlice } from '@reduxjs/toolkit'

// redux : 컴포넌트간 state 공유 편해짐
//usestate와 비슷함 slice라고 부름
let user = createSlice({
  name : 'user',
  initialState : 'kim'
})

let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]
})

//등록
export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer
  } 
}) 