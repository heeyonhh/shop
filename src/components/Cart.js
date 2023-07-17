import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {

    //redux store의 state꺼내기
    let a = useSelector((state)=>{ return state })
    //a.user a.stock
    //useSelector편하게 쓰려면 : 위 state는 모든 state를 뜻함. state.user 만 가져올수도 있음
    //간단한 프로젝트는 props로 쓰고 컴포넌트 많아지면 쓰면 좋음

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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
};

export default Cart;