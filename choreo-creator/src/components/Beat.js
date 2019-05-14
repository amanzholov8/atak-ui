import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DragScrollProvider from 'drag-scroll-provider'
import './Beat.css';

class Beat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bar: props.bar,
            beat: props.beat,
            openModal: props.openModal,
            media: props.addedImages,
            median: ["https://i.ibb.co/SXW4htY/img1.jpg", "https://i.ibb.co/vYJdvBg/img2.jpg"],
            show: props.show
        }
        this.plusBtn = React.createRef();
    }

    onPlusClick = () => {
        this.state.openModal(this.state.bar, this.state.beat);
    }

    render() {
        return (
            <Card className='Beat'>
                <Card.Header className='Beat-header'>{this.state.bar}:{this.state.beat}</Card.Header>            
                <DragScrollProvider>
                    {({ onMouseDown, ref }) => (
                            <Card.Body className='Beat-body' ref={ref} onMouseDown={onMouseDown}>
                                {
                                    this.props.addedImages.map(
                                        function(obj) {
                                            console.log(obj);
                                            if ((obj.bar === this.state.bar) && (obj.beat === this.state.beat)) {
                                                return <img className="BeatItem" src={obj.src} height="180rem" width="180rem"/>;
                                            }
                                            else {
                                                return "";
                                            }
                                        }.bind(this))
                                }                                                      
                                <Button className="BeatPlus" variant='outline-primary' onClick={this.onPlusClick} ref={this.plusBtn}>
                                    <FontAwesomeIcon icon='plus' size='7x'/>
                                </Button>
                            </Card.Body>
                    )}
                </DragScrollProvider>
                {((this.state.bar === 1) && (this.state.beat === 2)) ?
                    <Overlay target={this.plusBtn.current} show={this.props.show} placement="bottom">
                        {props => (
                        <Tooltip id="overlay-example" {...props}>
                        Add photo, video, sketch, or comment to this beat
                        </Tooltip>
                    )}
                    </Overlay> :
                    <p></p>
                }              
            </Card>
        );
    }
}

//export default connect()(Beat);
export default Beat;