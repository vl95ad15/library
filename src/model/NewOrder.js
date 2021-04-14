import Order from "./Order";
import User from "./User";
import Librarian from "./Librarian";
import books from "../data/books";
const faker = require('faker');

export const orderArr = []

const NewOrder = () => {
    const order:Order = new Order(faker.datatype.number(), User._id, Librarian._id, books.id, null, "In Progress")
    orderArr.push(order)
    console.log(orderArr)
}

export default NewOrder
