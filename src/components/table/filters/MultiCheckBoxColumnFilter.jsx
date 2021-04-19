import React, { useMemo, useState } from 'react';

function MultiCheckBoxColumnFilter({column: { setFilter, preFilteredRows, id }}) {

    const options = useMemo(() => {
        let counts = {};
        preFilteredRows.forEach(x => {
            x = x.values[id].toString();
            counts[x] = (counts[x] || 0) + 1;
        });
        return counts;
    }, [id, preFilteredRows]);

    const [checked, setChecked] = useState(Object.keys(false));

    const onChange = e => {
        const t = e.target.name.toString();
        setFilter(old => (old && old.includes(t) ? undefined : [t]));
        checked.includes(t) && checked.length === 1
            ? setChecked(Object.keys(false))
            : setChecked([t]);
    }

    return (
        <div className='checkBoxFilter'>
            <div
                className='filterItem'
                onClick={() => {
                    setChecked(Object.keys(false));
                    setFilter([]);
                }}
            >
                <span>Show All</span>
            </div>
            {Object.entries(options).map(([option, count], i) => {
                return (
                    <label className='filterItem' key={i} htmlFor={option}>
                        <input
                            type="checkbox"
                            name={option}
                            id={option}
                            checked={checked.includes(option)}
                            onChange={onChange}
                            title={`${option} (${count})`}
                        />
                        {option} ({count})
                    </label>
                );
            })}
        </div>
    )
}

export default MultiCheckBoxColumnFilter
