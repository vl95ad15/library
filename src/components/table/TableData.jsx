import books from "../../data/books";
import ModalBtn from "../buttons/ModalBtn";
import { Button } from "reactstrap";
import './Table.css'

function TableData() {
        return (
            books.map(book =>
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
            )
        )
}

export default TableData
