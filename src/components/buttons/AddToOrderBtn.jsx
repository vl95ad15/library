import React, { useContext, useState } from "react";
import {Button} from "reactstrap";
import {Context} from "../../context/context";
import books from "../../data/books";
import Order from "../../model/Order";
import {client} from "../../client";
const faker = require('faker');

const order:Order = new Order(faker.datatype.number(), client.getUserID(), faker.datatype.number(), [], null, "In Progress")
export const orderArr = order.booksArr

function AddToOrderBtn() {
    const { isLogged } = useContext(Context)
    const [booksInArr, setBooksInArr] = useState([]);

    const NewOrderItem = (arr, book) => {
        const index = books.indexOf(book)
        if(index > -1) {
            arr.push(book)
        }
        console.log(arr)
        return arr
    }

    return (
        <>
            {isLogged ? <Button color='success' onClick={() => setBooksInArr(NewOrderItem(orderArr, booksInArr))}><i className='fa fa-plus-circle'/></Button> : null}
        </>
    )
}

export default AddToOrderBtn
