import './Header.css'
import Search from "../../search/Search";
import RegBox from "./regBox/RegBox";

export default function Header(props) {
    return (
        <header className='header'>
            <p className='siteName'>Intexsoft National Library</p>
            <Search/>
            <RegBox/>
        </header>
    )
}
