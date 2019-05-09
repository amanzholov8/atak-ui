import React from 'react';

import DragScrollProvider from 'drag-scroll-provider'

import './TrackTimeline.css'
import Beat from "./Beat";

class TrackTimeline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: props.openModal,
            setBitSelected: props.setBitSelected
        };
        this.scrollBar = React.createRef();
        this.playTrack = this.playTrack.bind(this);
        this.pauseTrack = this.pauseTrack.bind(this);
        this.player = null;
        this.scrollSpeed = 10;
    }

    playTrack(){
        this.player = setInterval(this.moveForward, 1000 / this.scrollSpeed);
    }

    pauseTrack(){
        if(this.player)
            clearInterval(this.player);
    }

    moveForward(){
        this.scrollBar.current.scrollBy(this.scrollSpeed, 0);
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
                    <div className="playHead">&nbsp;</div>
                </div>
            )}
        </DragScrollProvider>
            
        );
    }
}

export default TrackTimeline;