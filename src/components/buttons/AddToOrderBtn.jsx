import React, {useContext} from "react";
import {Button} from "reactstrap";
import {Context} from "../../context/context";
import NewOrder from "../../model/NewOrder";

function AddToOrderBtn() {
    const { isLogged } = useContext(Context)

    return (
        <>
            {isLogged ? <Button color='success' onClick={NewOrder}><i className='fa fa-plus-circle'/></Button> : null}
        </>
    )
}

export default AddToOrderBtn
