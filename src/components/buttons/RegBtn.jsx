import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function RegBtn(props) {

    const {className, form, title} = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className='RegBox'>
            <Button color='success' onClick={toggle}>{title}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>{title}</ModalHeader>
                    <ModalBody>
                        {form}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Text</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )
}

export default RegBtn
