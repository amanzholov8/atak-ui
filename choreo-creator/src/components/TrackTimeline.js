import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Beat from "./Beat";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TrackTimeline extends React.Component {
    render(){
        return (
        <div className="TrackTimeline">
            <Beat bar={1} beat={1}/>
            <Beat bar={1} beat={2}/>
            <Beat bar={1} beat={3}/>
            <Beat bar={1} beat={4}/>
            <Beat bar={2} beat={1}/>
            <Beat bar={2} beat={2}/>
            <Beat bar={2} beat={3}/>
        </div>
        );
    }
}

export default TrackTimeline;