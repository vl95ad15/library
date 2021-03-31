import { Table } from 'reactstrap';
import books from "../../data/books";
import './Table.css';

export default function BooksTable() {
    return (
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Pages</th>
                <th>Published</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {books.map(book =>
                <tr key={book.bookID} className='BookItem'>
                    <td>{book.bookName}</td>
                    <td>{book.bookAuthor}</td>
                    <td>{book.genre}</td>
                    <td>{book.pages}</td>
                    <td>{book.published}</td>
                    <td>{book.status}</td>
                </tr>
            )}
            </tbody>
        </Table>
    )
}
