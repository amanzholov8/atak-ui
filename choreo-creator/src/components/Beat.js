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
            openModal: props.openModal
        }
    }
    render() {
        return (
            <Card className='Beat'>
                <Card.Header className='Beat-header'>{this.state.bar}:{this.state.beat}</Card.Header>            
                <DragScrollProvider>
                    {({ onMouseDown, ref }) => (
                            <Card.Body className='Beat-body' ref={ref} onMouseDown={onMouseDown}>
                                <Button variant='outline-primary' onClick={this.state.openModal}>
                                    <FontAwesomeIcon icon='plus' size='7x'/>
                                </Button>
                            </Card.Body>
                    )}
                </DragScrollProvider>
            </Card>
        );
    }
}

export default Beat;