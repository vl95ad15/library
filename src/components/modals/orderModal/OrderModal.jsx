import React, { useState } from 'react';
import { orderArr } from "../../buttons/AddToOrderBtn";

import "./OrderModal.css";

function OrderModal() {
    const [orders, setOrders] = useState([])

    const removeItemByIndex = (arr, value) => {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    return(
        <div className='OrderBox'>
            {orderArr.length !== 0 ?
                orderArr.map((item, i) =>
                        <div className='OrderItem' key={i}>
                            <span>{item._name}</span>
                            <span className='DeleteOrderItem' onClick={() => setOrders(removeItemByIndex(orderArr, item))}>
                                <i className="fa fa-times-circle"/>
                            </span>
                        </div>)
                            : <p>You haven't got any books in your order list.</p>
            }
        </div>
    )
}

export default OrderModal
