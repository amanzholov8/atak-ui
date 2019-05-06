import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MediaModal.css';

class MediaModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Modal 
                {...this.props}
                className="MediaModal"
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="MediaModal-line">
                  <div className="MediaModal-button">
                  Photo
                  </div>
                </Modal.Header>
                <Modal.Body className="MediaModal-line">
                  Video
                </Modal.Body>
                <Modal.Body className="MediaModal-line">
                  Sketch
                </Modal.Body>
                <Modal.Body className="MediaModal-line">
                  Comment
                </Modal.Body>                                
                <Modal.Footer className="MediaModal-line">
                  <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>            
            </Modal>
        );
    }
}

export default MediaModal;