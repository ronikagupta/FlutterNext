import React from 'react'
import {Button} from "react-bootstrap"

export default function Modal() {
  return (
      <div>
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>You want to delete this Guest Details</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary">Delete</Button>
        <Button variant="primary">Cancle</Button>
      </Modal.Footer>
    </Modal.Dialog></div>
  )
}
