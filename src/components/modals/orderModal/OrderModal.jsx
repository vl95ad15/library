import React, { useState } from 'react';
import { orderArr } from "../../buttons/AddToOrderBtn";
import CollapseBtn from "../../buttons/CollapseBtn";
import OrderSettings from "./orderSettings/OrderSettings";
import "./OrderModal.css";


function OrderModal() {
    const [orders, setOrders] = useState([])

    const removeItemByIndex = (arr, value) => {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
            console.log(`Book ${value} was removed from order`)
        }
        return arr;
    }

    const deleteItemBtn = (item) => {
        const deletion = (e) => {
            e.stopPropagation()
            setOrders(removeItemByIndex(orderArr, item))
        }
        return(
            <span className='DeleteOrderItem'
                  onClick={deletion}>
                <i className="fa fa-times-circle"/>
            </span>
        )
    }

    return(
        <div className='OrderBox'>
            {orderArr.length !== 0 ?
                orderArr.map((item, i) =>
                        <CollapseBtn key={i + item}
                                     className='OrderItem'
                                     title={<span className="OrderItemName">{item}</span>}
                                     closeBtn={deleteItemBtn(item)}
                                     cardBody={<OrderSettings/>}/>)
                            : <p>You haven't got any books in your order list.</p>}
        </div>
    )
}

export default OrderModal
