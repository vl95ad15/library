import { Table } from 'reactstrap';
import books from "../../data/books";
import './Table.css';
import ModalBtn from "../buttons/ModalBtn";

export default function BooksTable() {
    return (
        <Table striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Pages</th>
                <th>Published</th>
                <th>Status</th>
                <th>Action</th>
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
                    <ModalBtn title='info' color='secondary'/>
                </tr>
            )}
            </tbody>
        </Table>
    )
}
