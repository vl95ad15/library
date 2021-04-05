import BooksTable from "../../table/Table"
import Filter from "../filter/Filter";
import './Content.css'

export default function Content(props) {
    return (
        <main id='main'>
            <Filter/>
            <BooksTable/>
        </main>
    )
}
