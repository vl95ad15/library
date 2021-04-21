// import Book from "../model/Book";
// import Author from "../model/Author";
// const faker = require('faker');
//
// const MAX_AUTH_AMOUNT = 3;
// const MAX_BOOKS_AMOUNT = 40;
//
// function getAuthors(authAmount = MAX_AUTH_AMOUNT) {
//     const authorsArray = []
//     for (let j = 0; j <= authAmount; j++) {
//         const author:Author = new Author(faker.datatype.number(), faker.name.findName());
//         authorsArray.push(author);
//     }
//     return authorsArray
// }

// import { client } from "../client";
//
// async function getBooks(){
//     const books = await client.getData()
//     Promise.all([books]).then(books.map(book => book))
//     console.log(books)
//     return books
// }
//
// export default getBooks()
