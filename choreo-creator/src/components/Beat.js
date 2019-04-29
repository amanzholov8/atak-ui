import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Beat.css';

class Beat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bar: props.bar,
            beat: props.beat
        }
    }
    render() {
        return (
            <Card className='Beat'>
                <Card.Header className='Beat-header'>{this.state.bar}:{this.state.beat}</Card.Header>
                <Card.Body>
                    <Button variant='primary'>
                        <FontAwesomeIcon icon='plus' size='7x'/>
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Beat;