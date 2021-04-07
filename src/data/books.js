import Book from "../model/Book";
import Author from "../model/Author";
const faker = require('faker');

const books = [];

for (let i = 0; i < 15; i++) {

    const authorsArray = [];
    const author:Author = new Author(faker.datatype.number(), faker.name.findName());
    authorsArray.push(author)

    const book:Book = new Book(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.random.word(),
        authorsArray,
        faker.datatype.number(),
        faker.datatype.boolean().toString(),
        faker.date.past().getFullYear(),
        faker.music.genre(),
        faker.datatype.number())
    console.log(book)

    books.push(book);
}

export default books
