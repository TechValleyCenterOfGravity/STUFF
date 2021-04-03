import * as React from "react";
import { createPortal } from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AppModal = ({ isVisible, hideModal }) => {

    return isVisible
      ? createPortal(
          <React.Fragment>
            <Modal show={isVisible} onHide={hideModal}>
              <Modal.Header closeButton>
                <Modal.Title>Item Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={hideModal}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>,
          document.getElementById('modal-root'),
        )
      : null;
  };
  
  export default AppModal;