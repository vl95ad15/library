import React from "react";

function OrderSettings() {

    return (
        <form action="">
            <label>Order till:
                <input type='date'/>
            </label>
            <button type='submit' onClick={(e) => e.preventDefault()}>Order</button>
        </form>
    )
}

export default OrderSettings
