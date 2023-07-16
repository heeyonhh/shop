import Table from 'react-bootstrap/Table';

function Cart() {

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