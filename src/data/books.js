import Book from "../model/Book";
import Author from "../model/Author";
const faker = require('faker');

const MAX_AUTH_AMOUNT = 3;
const MAX_BOOKS_AMOUNT = 40;

function getAuthors(authAmount = MAX_AUTH_AMOUNT) {
    const authorsArray = []
    for (let j = 0; j <= authAmount; j++) {
        const author:Author = new Author(faker.datatype.number(), faker.name.findName());
        authorsArray.push(author);
    }
    return authorsArray
}

function getBooks(booksAmount = MAX_BOOKS_AMOUNT){
    const books = [];
    for (let i = 0; i < booksAmount; i++) {
        const book:Book = new Book(
            faker.datatype.number(),
            faker.datatype.number(),
            faker.random.word(),
            getAuthors(Math.floor(Math.random() * 3)),
            Math.floor(faker.datatype.number() / 125),
            faker.datatype.boolean().toString(),
            faker.date.past().getFullYear(),
            faker.music.genre(),
            faker.datatype.number()
        )
        books.push(book);
        // console.log(JSON.stringify(book))
    }

    return books
}

export default getBooks()
