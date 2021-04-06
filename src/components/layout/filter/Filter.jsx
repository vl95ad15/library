import { List } from "reactstrap";
import books from "../../../data/books";
import "./Filter.css"

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
                {uniqueBookGenresArray.map((item, index) =>
                    <li key={index.toString()}><label id='label'><input type='checkbox'/>{item}</label></li>
                )}
            </ul>
            <li className='HeaderList'>Status</li>
            <ul>
                {uniqueBookStatusArray.map((item, index) =>
                    <li key={index.toString()}><label id='label'><input type='checkbox'/>{item}</label></li>
                )}
            </ul>
        </List>
    )
}

export default Filter
