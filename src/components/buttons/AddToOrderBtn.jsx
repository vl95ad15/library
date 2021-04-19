import React, { useContext, useState } from "react";
import {Button} from "reactstrap";
import {Context} from "../../context/context";
import Order from "../../model/Order";
import {client} from "../../client";
const faker = require('faker');

const order:Order = new Order(faker.datatype.number(), client.getUserID(), faker.datatype.number(), [], null, "In Progress")
export const orderArr = order.booksArr

function AddToOrderBtn(props) {
    const { isLogged } = useContext(Context)
    const [booksInArr, setBooksInArr] = useState([]);

    const NewOrderItem = (book) => {
        orderArr.splice(0, 0, book)
        return orderArr
    }

    return (
        <>
            {isLogged ? <Button color='success' onClick={() => setBooksInArr(NewOrderItem(props.item))}><i className='fa fa-plus-circle'/></Button> : null}
        </>
    )
}

export default AddToOrderBtn
