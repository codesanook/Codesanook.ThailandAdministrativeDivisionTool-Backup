import * as React from "react";
import { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'

const SqlScriptExport: FunctionComponent = () => {
    const handleExport = () => setShowModal(true);
    const handleModalOKClick = () => setShowModal(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="sql-export">
            <Modal show={showModal} centered={true} className="export-modal">
                <Modal.Header>
                    <Modal.Title>Export</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your SQL script has been exported</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalOKClick}> Close </Button>
                </Modal.Footer>
            </Modal>
            {/* Use of React Bootstrap https://github.com/react-bootstrap/react-bootstrap */}
            <Button variant="primary" onClick={handleExport}>Export SQL Script</Button>
        </div>
    );
}
export default SqlScriptExport;
