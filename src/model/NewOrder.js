import Order from "./Order";
import User from "./User";
import books from "../data/books";
import { client } from "../client";

const faker = require('faker');

export const orderArr = []

const NewOrder = () => {
    const order:Order = new Order(faker.datatype.number(), client.getUserID(), faker.datatype.number(), [], null, "In Progress")
    orderArr.push(order)
    console.log(order)
}



export default NewOrder
