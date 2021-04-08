import { Table } from 'reactstrap';
import TableData from "./TableData";
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
                <th></th>
            </tr>
            </thead>
            <tbody>
                <TableData/>
            </tbody>
        </Table>
    )
}
