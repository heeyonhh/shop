import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../store/userSlice'
import { addCount } from '../store'
import { useMemo, useState } from 'react';

function 함수(){
    return 반복문 10억번 돌린 결과
}
//useMemo 컴포넌트 렌더링시 1회만 실행해줌

function Cart() {

    let result = 함수();
    useMemo(()=>{return 함수()}, [state])
    //[]디펜던시 사용할 수 있음

    let state = useSelector((state)=> state)
    let dispatch = useDispatch()

    return (
        <div>
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