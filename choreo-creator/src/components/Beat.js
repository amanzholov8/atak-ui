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
            media: ["https://i.ibb.co/SXW4htY/img1.jpg", "https://i.ibb.co/vYJdvBg/img2.jpg"]
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
                                    this.state.media.map(
                                        function(src) {
                                            return <img className="BeatImage" src={src} />
                                        }.bind(this))
                                }                                                        
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