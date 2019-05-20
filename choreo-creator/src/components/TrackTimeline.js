import React from 'react';

import './TrackTimeline.css'
import Beat from "./Beat";

class TrackTimeline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: props.openModal,
            addedImage: props.addedImage,
            show: props.show,
            active: props.active
        };
        this.scrollBar = React.createRef();
        this.playTrack = this.playTrack.bind(this);
        this.pauseTrack = this.pauseTrack.bind(this);
        this.moveForward = this.moveForward.bind(this);
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
            <div className="TrackTimeline" ref={this.scrollBar}>
                <div className = "empty">&nbsp;</div>
                <Beat bar={1} beat={1} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <Beat bar={1} beat={2} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <Beat bar={1} beat={3} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <Beat bar={1} beat={4} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <Beat bar={2} beat={1} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <Beat bar={2} beat={2} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <Beat bar={2} beat={3} openModal = {this.state.openModal} addedImages={this.props.addedImages} show={this.props.show}/>
                <div className="playHead">&nbsp;</div>
                <div className = "empty">&nbsp;</div>
            </div>
        );
    }
}

export default TrackTimeline;