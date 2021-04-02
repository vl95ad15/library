import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function ModalBtn(props) {

    const {className, modalBody, title, color} = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className='RegBox'>
            <Button color={color} onClick={toggle}>{title}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>{title}</ModalHeader>
                    <ModalBody>
                        {modalBody}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Text</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )
}

export default ModalBtn
