import { useContext } from 'react';
import { Context } from '../../../../context/context'
import {Button} from "reactstrap";
import ModalBtn from "../../../buttons/ModalBtn";
import LoginModal from "../../../modals/loginModal/LoginModal";
import SignupModal from "../../../modals/signupModal/SignupModal";
import OrderModal from "../../../modals/orderModal/OrderModal";
import './RegBox.css'

function RegBox() {
    const { isLogged, logOut, userName } = useContext(Context);

    if (!isLogged) {
        return (
            <div className='BtnBox'>
                <ModalBtn color='info' title="Login" headerTitle='Login' modalBody={<LoginModal/>}/>
                <ModalBtn color='info' title="Signup" headerTitle='Signup' modalBody={<SignupModal/>}/>
            </div>
        )
    } else {
        return (
            <div className='LogoutBox'>
                <p>{userName}</p>
                <ModalBtn color='info' title={<i className="fa fa-book"/>} headerTitle='My order' modalBody={<OrderModal/>}/>
                <Button onClick={logOut}>Logout</Button>
            </div>
        )
    }
}

export default RegBox
