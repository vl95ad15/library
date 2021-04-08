import React, { useState } from "react";

function FilterItem(props) {
    const [checked, setChecked] = useState(false);

    return(
        <label id='label'>
            <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
            {props.text}
        </label>
    )
}

export default FilterItem
