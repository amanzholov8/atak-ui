import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
            median: ["https://i.ibb.co/SXW4htY/img1.jpg", "https://i.ibb.co/vYJdvBg/img2.jpg"]
        }
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
                                                return <img className="BeatImage" src={obj.src} />;
                                            }
                                            else {
                                                return "";
                                            }
                                        }.bind(this))
                                }
                                {/*(this.props.addedImages && this.props.addedImages[0] && (2 === this.state.bar) && (1 === this.state.beat)) ? <img className="BeatImage" src={this.props.addedImages[0].src}></img> : <p>.</p>*/}                                                        
                                <Button variant='outline-primary' onClick={this.onPlusClick}>
                                    <FontAwesomeIcon icon='plus' size='7x'/>
                                </Button>
                            </Card.Body>
                    )}
                </DragScrollProvider>
            </Card>
        );
    }
}

//export default connect()(Beat);
export default Beat;