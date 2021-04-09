import {List} from "reactstrap";
import books from "../../../data/books";
import "./Filter.css"
import FilterItem from "./FilterItem";

function Filter() {

    const getGenresArray = (array) => {
        const bookGenresArray = [];
        array.forEach(item => bookGenresArray.push(item.genre));
        return [...new Set(bookGenresArray)]                      // <-- returns array without duplicates
    }

    const getStatusArray = array => {
        const bookStatusArray = [];
        array.forEach(item => bookStatusArray.push(item.status));
        return [...new Set(bookStatusArray)]
    }

    return(
        <List type="unstyled" className='FilterList'>
            <li className='HeaderList'>Genre</li>
            <ul>
                {getGenresArray(books).map((item, i) =>
                    <li key={i}><FilterItem text={item}/></li>
                )}
            </ul>
            <li className='HeaderList'>Status</li>
            <ul>
                {getStatusArray(books).map((item, i) =>
                    <li key={i}><FilterItem text={item}/></li>
                )}
            </ul>
        </List>
    )
}

export default Filter
