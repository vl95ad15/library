import {Button, Table} from 'reactstrap';
import books from "../../data/books";
import './Table.css';
import ModalBtn from "../buttons/ModalBtn";

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
                <th></th>
            </tr>
            </thead>
            <tbody>
            {books.map(book =>
                <tr key={book.id} className='BookItem'>
                    <td>{book.name}</td>
                    <td>{book.authors.map(i => i.name).join(', ')}</td>
                    <td>{book.genre}</td>
                    <td>{book.pages}</td>
                    <td>{book.published}</td>
                    <td>{book.status}</td>
                    <td className='BtnContainer'>
                        <ModalBtn headerTitle='Information' title={<i className='fa fa-info-circle'/>} color='secondary'/>
                        <Button color='success'><i className='fa fa-plus-circle'/></Button>
                    </td>
                </tr>
            )}
            </tbody>
        </Table>
    )
}
