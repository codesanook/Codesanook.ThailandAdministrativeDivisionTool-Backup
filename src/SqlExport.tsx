import * as React from "react";
import { FunctionComponent, useState } from 'react'
import "./SqlExport.css"
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'


const SqlExport: FunctionComponent = () => {

    const handleExport = () => {
        setShowModal(true);
    }

    const handleModalOKClick = () => {
        setShowModal(false);
    }

    const handleOnHide =()=>{

    };

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Modal show={showModal} centered={true} className="export-modal" onHide={handleOnHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalOKClick}> Close </Button>
                </Modal.Footer>
            </Modal>
            <div className="text-right sql-export">
                {/* Use of React Bootstrap https://github.com/react-bootstrap/react-bootstrap */}
                <Button variant="primary" onClick={handleExport}>OK</Button>
            </div>
        </div>
    );
}
export default SqlExport;
