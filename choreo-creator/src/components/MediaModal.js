import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MediaModal.css';

class MediaModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          beatselected: props.beatselected
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
                <Modal.Body>
                  Selected Bar-Beat: {`${this.props.beatselected.bar}-${this.props.beatselected.beat}`}
                </Modal.Body>

                <Button variant='outline-primary' className="MediaModal-line">
                  <Modal.Body>
                    <FontAwesomeIcon icon='image' size='2x'/> Photo
                  </Modal.Body>
                </Button>

                <Button variant='outline-primary' className="MediaModal-line">
                  <Modal.Body>
                    <FontAwesomeIcon icon='video' size='2x'/> Video
                  </Modal.Body>
                </Button>
                
                <Button variant='outline-primary' className="MediaModal-line">  
                  <Modal.Body>
                    <FontAwesomeIcon icon='paint-brush' size='2x'/> Sketch
                  </Modal.Body>
                </Button>

                <Button variant='outline-primary' className="MediaModal-line">
                  <Modal.Body>
                    <FontAwesomeIcon icon='comment' size='2x'/> Comment
                  </Modal.Body>          
                </Button>
                                        
                <Modal.Footer className="MediaModal-line Footer">
                  <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>            
            </Modal>
        );
    }
}

export default MediaModal;