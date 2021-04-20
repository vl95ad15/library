import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function CollapseBtn(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { className, cardBody, color, title, closeBtn } = props;

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Button className={className} title={title} color={color} onClick={toggle}>{title}{closeBtn}</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {cardBody}
                    </CardBody>
                </Card>
            </Collapse>
        </>
    );
}

export default CollapseBtn;
