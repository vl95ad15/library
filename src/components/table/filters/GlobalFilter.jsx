import React, { useState } from 'react';
import {useAsyncDebounce} from "react-table";


function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }){
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    })

    return (
        <input
            className='searchField'
            type='text'
            value={value || ""}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            placeholder={`Search from ${count} records...`}
        />
    )
}

export default GlobalFilter
