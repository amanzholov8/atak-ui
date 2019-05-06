import React from 'react';

import './TrackTimeline.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import DragScrollProvider from 'drag-scroll-provider'
import Beat from "./Beat";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TrackTimeline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: props.openModal
        };
    }    
    render(){
        return (
        <DragScrollProvider>
            {({ onMouseDown, ref }) => (
                <div className="TrackTimeline" ref={ref} onMouseDown={onMouseDown}>
                    <Beat bar={1} beat={1} openModal = {this.state.openModal}/>
                    <Beat bar={1} beat={2} openModal = {this.state.openModal}/>
                    <Beat bar={1} beat={3} openModal = {this.state.openModal}/>
                    <Beat bar={1} beat={4} openModal = {this.state.openModal}/>
                    <Beat bar={2} beat={1} openModal = {this.state.openModal}/>
                    <Beat bar={2} beat={2} openModal = {this.state.openModal}/>
                    <Beat bar={2} beat={3} openModal = {this.state.openModal}/>
                </div>
            )}
        </DragScrollProvider>
        );
    }
}

export default TrackTimeline;