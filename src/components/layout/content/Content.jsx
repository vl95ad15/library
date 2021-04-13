// import BooksTable from "../../table/Table"
// import Filter from "../filter/Filter";
import './Content.css'
import ReactTable from "../../table/ReactTable";

export default function Content(props) {
    return (
        <main id='main'>
            {/*<Filter/>*/}
            <ReactTable/>
            {/*<BooksTable/>*/}
        </main>
    )
}
