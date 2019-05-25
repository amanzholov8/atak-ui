import React from 'react';
import ReactDOM from 'react-dom';

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
        this.playHead = React.createRef();
        this.isLooping = false;
        //
        this.numBeats = 9;
        this.leftBoundNum = 0;
        this.rightBoundNum = this.numBeats - 1;
        this.leftBound = null;
        this.righBound = null;
        this.beatRefs = [];
        for(let i = 0; i < this.numBeats; i++){
            this.beatRefs.push(React.createRef());
        }
        this.selectLeftBound = this.selectLeftBound.bind(this);
        this.selectRightBound = this.selectRightBound.bind(this);
        this.loopRegion = this.loopRegion.bind(this);
        this.loopForward = this.loopForward.bind(this);
    }

    playTrack(){
        this.player = setInterval(this.moveForward, 1000 / this.scrollSpeed);
    }

    pauseTrack(){
        if(this.player)
            clearInterval(this.player);
    }

    moveForward(){
        if(false) {
            // If it passes the last beat stop
            this.pauseTrack();
        }
        else {
            this.scrollBar.current.scrollBy(this.scrollSpeed, 0);
        }
    }

    loopForward(leftBound, rightBound, offset){
        let pos = ReactDOM.findDOMNode(this.scrollBar.current).scrollLeft;
        //debugger;
        if(pos + this.scrollSpeed > rightBound - offset){
            this.scrollBar.current.scrollBy(rightBound - offset - pos, 0);
            this.scrollBar.current.scrollTo({left: (leftBound - offset)})
        }
        else {
            this.scrollBar.current.scrollBy(this.scrollSpeed, 0);
        }
    }

    loopRegion(leftBound, rightBound, offset){
        if(this.isLooping){
            this.pauseTrack();
            this.isLooping = false;
        }
        else {
            if(this.player)
                this.pauseTrack();
            this.scrollBar.current.scrollTo({left: leftBound - offset});
            this.isLooping = true;
            this.player = setInterval(() => this.loopForward(leftBound, rightBound, offset), 1000 / this.scrollSpeed);
        }
    }

    selectLeftBound(bar, beat) {
        let idx = (bar - 1) * 4 + beat - 1;
        if(this.leftBound === this.beatRefs[idx]){
            this.leftBound.current.toggleLeft();
            this.leftBound = null;
            this.leftBoundNum = 0;
        }
        if(idx > this.rightBoundNum){
            return;
        }
        if(this.leftBound){
            this.leftBound.current.toggleLeft();
        }
        this.leftBound = this.beatRefs[idx];
        this.leftBound.current.toggleLeft();
        this.leftBoundNum = idx;
    }

    selectRightBound(bar, beat) {
        let idx = (bar - 1) * 4 + beat - 1;
        if(this.rightBound === this.beatRefs[idx]){
            this.rightBound.current.toggleRight();
            this.rightBound = null;
            this.rightBoundNum = this.numBeats - 1;
        }
        if(idx < this.leftBoundNum){
            return;
        }
        if(this.rightBound){
            this.rightBound.current.toggleRight();
        }
        this.rightBound = this.beatRefs[idx];
        this.rightBound.current.toggleRight();
        this.rightBoundNum = idx;
    }

    render(){
        let beats = [];
        for(let i = 0; i < this.numBeats; i++){
            beats.push(
                (<Beat bar={Math.floor(i / 4) + 1}
                       beat={i % 4 + 1}
                       openModal={this.state.openModal}
                       addedImages={this.props.addedImages}
                       show={this.props.show}
                       selectLeftBound={this.selectLeftBound}
                       selectRightBound={this.selectRightBound}
                       ref={this.beatRefs[i]}/>)
            );
        }
        return (
            <div className="TrackTimeline" ref={this.scrollBar}>
                <div className = "empty">&nbsp;</div>
                {beats}
                <div id="playHead" ref={this.playHead}>&nbsp;</div>
                <div className = "empty">&nbsp;</div>
            </div>
        );
    }
}

export default TrackTimeline;