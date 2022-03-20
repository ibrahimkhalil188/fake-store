import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css'

const ReactModal = (props) => {
    const { title, image, description, price } = props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: "flex" }}>
                    <img className='me-4' src={image} alt=""></img>
                    <div>
                        <p>{description}</p>
                        <h2>Price: {price}$</h2>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;