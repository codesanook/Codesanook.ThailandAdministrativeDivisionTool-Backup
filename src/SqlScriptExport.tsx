import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const SqlScriptExport: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const handleExport = () => setShowModal(true)
  const handleModalOKClick = () => setShowModal(false)

  return (
        <div className="sql-export">
            <Modal show={showModal} centered className="export-modal">
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
  )
}
export default SqlScriptExport
