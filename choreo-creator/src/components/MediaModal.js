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
          beatselected: props.beatselected,
          galleryModal: false,
          setimage: props.setimage
        }
        this.openGalleryOnClick = this.openGalleryOnClick.bind(this);
    }
    
    openGalleryOnClick = () => {
      this.setState({
        galleryModal: true
      });
      this.props.onHide();
    }
    
    onClose = () => {

    }

    sendimage = () => {
      this.state.setimage("https://i.ibb.co/SXW4htY/img1.jpg");
      console.log("gogo");
    }

    render() {
        return (
          <div>
            <Modal 
                {...this.props}
                className="MediaModal"
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                  Selected Bar-Beat: 
                  <span className="BeatIndicator">{`${this.props.beatselected.bar}-${this.props.beatselected.beat}`}</span>
                </Modal.Body>

                <Button variant='outline-primary' className="MediaModal-line" onClick={this.openGalleryOnClick}>
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
            <Modal show={this.state.galleryModal} onHide={this.onClose}>
            
              <Modal.Body>
                <Button variant="primary" onClick={this.sendimage}>
                  <img src="https://i.ibb.co/SXW4htY/img1.jpg" width="180rem"/>
                </Button>
                <Button variant="primary">
                  <img src="https://i.ibb.co/vYJdvBg/img2.jpg" width="180rem"/>
                </Button>                
              </Modal.Body>
            </Modal>
          </div>
        );
    }
}

export default MediaModal;