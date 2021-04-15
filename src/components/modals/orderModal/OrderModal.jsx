import "./OrderModal.css"
import { orderArr } from "../../../model/NewOrder";

function OrderModal() {
    return(
        <div className='OrderBox'>
            {orderArr.length !== 0 ?
                orderArr.map((item, i) =>
                        <div className='OrderItem' key={i}>
                            <span>{item._id} ({item._status})</span>
                            <span><i className="fa fa-times-circle"/></span>
                        </div>)
                            : <p>You have no orders yet.</p>
            }
        </div>
    )
}

export default OrderModal
