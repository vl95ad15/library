import './Header.css'
import RegBox from "./regBox/RegBox";

export default function Header() {
    return (
        <header className='header'>
            <p className='siteName'>Intexsoft National Library</p>
            <RegBox/>
        </header>
    )
}
