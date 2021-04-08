import { List } from "reactstrap";
import books from "../../../data/books";
import "./Filter.css"
import FilterItem from "./FilterItem";

function Filter() {

    const bookGenresArray = [];
    books.sort((a, b) => a.genre.localeCompare(b.genre)).forEach(item => bookGenresArray.push(item.genre))
    const uniqueBookGenresArray = [...new Set(bookGenresArray)];

    const bookStatusArray = [];
    books.sort((a, b) => a.genre.localeCompare(b.status)).forEach(item => bookStatusArray.push(item.status))
    const uniqueBookStatusArray = [...new Set(bookStatusArray)];

    return(
        <List type="unstyled" className='FilterList'>
            <li className='HeaderList'>Genre</li>
            <ul>
                {uniqueBookGenresArray.map((item, i) =>
                    <li key={i}><FilterItem text={item}/></li>
                )}
            </ul>
            <li className='HeaderList'>Status</li>
            <ul>
                {uniqueBookStatusArray.map((item, i) =>
                    <li key={i}><FilterItem text={item}/></li>
                )}
            </ul>
        </List>
    )
}

export default Filter
