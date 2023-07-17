import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {

    let state = useSelector((state)=> state)

    return (
        <div>
            <Table>
                <thead>
                    {/* 가로 */}
                    <tr>
                        {/* 세로 */}
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {/* arry.map(a, i) */}
                    {
                        state.cart.map((a, i)=>
                            <tr key={i}>
                                <td>1</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>변경하기</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
};

export default Cart;