import { List } from "reactstrap";
import books from "../../../data/books";
import "./Filter.css"

function Filter(props) {

    const data = books;
    const filters = {
        status: ["available", "not available"],
        genre: ["comedy", "novel", "adventures"]
    }

    return(
        <List type="unstyled" className='FilterList'>
            <li className='HeaderList'>Status</li>
            <ul>
            {filters.status.map(item =>
                <li><label id='label'><input type='checkbox'/>{item}</label></li>
            )}
            </ul>
            <li className='HeaderList'>Genre</li>
            <ul>
                {filters.genre.map(item =>
                    <li><label id='label'><input type='checkbox'/>{item}</label></li>
                )}
            </ul>
        </List>
    )
}

export default Filter
