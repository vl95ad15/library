import { useContext } from 'react';
import { Context } from '../../../../context/context'
import {Button} from "reactstrap";
import RegBtn from "../../../buttons/RegBtn";
import LoginModal from "../../../modals/loginModal/LoginModal";
import SignupModal from "../../../modals/signupModal/SignupModal";
import './RegBox.css'

function RegBox() {
    const {isLogged, logOut, userName } = useContext(Context);
    if (!isLogged) {
        return (
            <div className='RegBox'>
                <RegBtn title="Login" form={<LoginModal/>}/>
                <RegBtn title="Signup" form={<SignupModal/>}/>
            </div>
        )
    } else {
        return (
            <div className='RegBox'>
                <p>{userName}</p>
                <Button onClick={logOut}>Logout</Button>
            </div>
        )
    }

}

export default RegBox
