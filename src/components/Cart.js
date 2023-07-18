import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../store/userSlice'
import { addCount } from '../store'
import { memo, useState } from 'react';

let Chiild = memo( function(){
    console.log('재랜더링됨')
    return <div>자식임</div>
})
//자식 컴포넌트 재랜더링 막는법 memo -> 재랜더링 할때 무거운 컴포넌트면 성능저하를 일으킬수 있음
//memo의 원리 : props가 변할 떄만 재랜더링 해줌 기존 props == 신규 props 계속 비교해볼듯
//꼭 필요한 무거운 컴포넌트에 쓰면 좋음

function Cart() {

    let state = useSelector((state)=> state)
    let dispatch = useDispatch()
    let [count, setCount] = useState(0)

    return (
        <div>
            <Chiild count={count}></Chiild>
            <button onClick={()=>{ setCount(count+1)}}>+</button>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{
                dispatch(increase(100))
            }}>버튼</button>
            
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
};

export default Cart;