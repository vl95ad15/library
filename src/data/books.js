import Book from "../model/Book";
import Author from "../model/Author";
const faker = require('faker');

const books = [];
const maxAuthAmount = 3;
const maxBooksAmount = 15;

for (let i = 0; i < maxBooksAmount; i++) {

    const authorsArray = [];
    for (let j = 0; j <= (Math.floor(Math.random() * maxAuthAmount)); j++){
        const author:Author = new Author(faker.datatype.number(), faker.name.findName());
        authorsArray.push(author)
    }

    const book:Book = new Book(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.random.word(),
        authorsArray,
        faker.datatype.number(),
        faker.datatype.boolean().toString(),
        faker.date.past().getFullYear(),
        faker.music.genre(),
        faker.datatype.number()
    )
    console.log(book)

    books.push(book);
}

export default books
