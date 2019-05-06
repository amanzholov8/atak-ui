import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import DragScrollProvider from 'drag-scroll-provider'
import Beat from "./Beat";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TrackTimeline extends React.Component {
    render(){
        return (
        <DragScrollProvider>
            {({ onMouseDown, ref }) => (
                <div className="TrackTimeline" ref={ref} onMouseDown={onMouseDown}>
                    <Beat bar={1} beat={1}/>
                    <Beat bar={1} beat={2}/>
                    <Beat bar={1} beat={3}/>
                    <Beat bar={1} beat={4}/>
                    <Beat bar={2} beat={1}/>
                    <Beat bar={2} beat={2}/>
                    <Beat bar={2} beat={3}/>
                </div>
            )}
        </DragScrollProvider>            
        );
    }
}

export default TrackTimeline;