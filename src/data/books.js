import Book from "../model/Book";
import Author from "../model/Author";
const faker = require('faker');

const books = [];

for (let i = 0; i < 15; i++) {

    const author:Author = new Author(faker.datatype.number(), faker.name.findName());
    const book:Book = new Book(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.random.word(),
        author,
        faker.datatype.number(),
        faker.datatype.boolean().toString(),
        faker.date.past().getFullYear(),
        faker.music.genre(),
        faker.datatype.number());

    books.push(book);
}

export default books
