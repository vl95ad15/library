import "./OrderModal.css"
import { orderArr } from "../../../model/NewOrder";

function OrderModal() {
    return(
        <div>
            {orderArr.length !== 0 ? orderArr.map((item, i) => <ul>
                    <li key={i}>{item._id} ({item._status})</li></ul>) : <p>You have no orders yet!</p>}
        </div>
    )
}

export default OrderModal
