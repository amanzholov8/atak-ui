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
          images: ["https://i.ibb.co/SXW4htY/img1.jpg", "https://i.ibb.co/vYJdvBg/img2.jpg", "https://i.ibb.co/qdtwMXh/img3.jpg", "https://i.ibb.co/qkfr06Q/img4.jpg"],
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
      this.setState({
        galleryModal: false
      });
    }

    sendimage0 = () => {
      this.onClose();
      this.state.setimage(this.state.images[0], this.props.beatselected.bar, this.props.beatselected.beat);
    }

    sendimage1 = () => {
      this.onClose();
      this.state.setimage(this.state.images[1], this.props.beatselected.bar, this.props.beatselected.beat);
    }    

    sendimage2 = () => {
      this.onClose();
      this.state.setimage(this.state.images[2], this.props.beatselected.bar, this.props.beatselected.beat);
    } 

    sendimage3 = () => {
      this.onClose();
      this.state.setimage(this.state.images[3], this.props.beatselected.bar, this.props.beatselected.beat);
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

                <Button variant="primary" onClick={this.sendimage0}>
                  <img src="https://i.ibb.co/SXW4htY/img1.jpg" width="180" height="180"/>
                </Button>
                <Button variant="primary" onClick={this.sendimage1}>
                  <img src="https://i.ibb.co/vYJdvBg/img2.jpg" width="180rem" height="180rem"/>
                </Button>  
                <Button variant="primary" onClick={this.sendimage2}>
                  <img src="https://i.ibb.co/qdtwMXh/img3.jpg" width="180rem" height="180rem"/>
                </Button>
                <Button variant="primary" onClick={this.sendimage3}>
                  <img src="https://i.ibb.co/qkfr06Q/img4.jpg" width="180rem" height="180rem"/>
                </Button>                                                  
              </Modal.Body>
            </Modal>
          </div>
        );
    }
}

export default MediaModal;