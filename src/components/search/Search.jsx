import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className='SearchBox'>
            <input type="text" className='Search'/>
            <button className='SearchBtn'><i className='fa fa-search'/></button>
        </div>
    )
}

export default Search
