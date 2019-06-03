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
            loopingPrompt: props.loopingPrompt,
            active: props.active,
            speed: props.speed
        };
        this.scrollBar = React.createRef();
        this.playTrack = this.playTrack.bind(this);
        this.pauseTrack = this.pauseTrack.bind(this);
        this.moveForward = this.moveForward.bind(this);

        this.player = null;
        //this.scrollSpeed = 10;
        this.playHead = React.createRef();
        this.isLooping = false;
        //
        this.numBeats = 20;
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
        this.goBackward = this.goBackward.bind(this);
        this.goForward = this.goForward.bind(this);
    }

    playTrack(){
        let playFunc = this.isLooping ? this.loopForward : this.moveForward;
        this.player = setInterval(playFunc, 1000 / this.scrollSpeed);
    }

    pauseTrack(){
        if(this.player)
            clearInterval(this.player);
    }

    moveForward(){
        let pos = ReactDOM.findDOMNode(this.scrollBar.current).scrollLeft;
        let offset = ReactDOM.findDOMNode(this.playHead.current).offsetLeft;
        debugger;
        if(pos > this.rightOffset - offset) {
            // If it passes the last beat stop
            this.pauseTrack();
        }
        else {
            this.scrollBar.current.scrollBy(this.props.speed, 0);
        }
    }

    loopForward(){
        let leftBound = ReactDOM.findDOMNode(this.leftBound.current).offsetLeft;
        let tmp = ReactDOM.findDOMNode(this.rightBound.current);
        let rightBound = tmp.offsetLeft + tmp.offsetWidth;
        let offset = ReactDOM.findDOMNode(this.playHead.current).offsetLeft;
        let pos = ReactDOM.findDOMNode(this.scrollBar.current).scrollLeft;
        if(pos > rightBound - offset || pos < leftBound - offset){
            this.scrollBar.current.scrollTo({left: (leftBound - offset)})
        }
        else {
            this.scrollBar.current.scrollBy(this.scrollSpeed, 0);
        }
    }

    loopRegion(){
        this.isLooping = !this.isLooping;
        if(this.isLooping){
            this.leftBound = this.beatRefs[0];
            this.rightBound = this.beatRefs[2];
            this.leftBoundNum = 0;
            this.rightBoundNum = 2;
            this.leftBound.current.toggleLeft();
            this.rightBound.current.toggleRight();
        }
        else {
            this.leftBound.current.toggleLeft();
            this.rightBound.current.toggleRight();
            this.leftBound = null;
            this.rightBound = null;
            this.leftBoundNum = 0;
            this.rightBoundNum = this.numBeats - 1;
        }
        /*if(this.isLooping){
            this.pauseTrack();
            this.isLooping = false;
        }
        else {
            if(this.player)
                this.pauseTrack();
            this.scrollBar.current.scrollTo({left: leftBound - offset});
            this.isLooping = true;
            this.player = setInterval(() => this.loopForward(leftBound, rightBound, offset), 1000 / this.scrollSpeed);
        }*/
    }

    selectLeftBound(bar, beat) {
        let idx = (bar - 1) * 4 + beat - 1;
        if(idx > this.rightBoundNum || this.leftBound === this.beatRefs[idx] || !this.isLooping){
            return;
        }
        if(this.leftBound){
            this.leftBound.current.toggleLeft();
        }
        else {
            console.log('Something went wrong');
        }
        this.leftBound = this.beatRefs[idx];
        this.leftBound.current.toggleLeft();
        this.leftBoundNum = idx;
    }

    selectRightBound(bar, beat) {
        let idx = (bar - 1) * 4 + beat - 1;
        if(idx < this.leftBoundNum || this.rightBound === this.beatRefs[idx] || !this.isLooping){
            return;
        }
        if(this.rightBound){
            this.rightBound.current.toggleRight();
        }
        else {
            console.log('Something went wrong');
        }
        this.rightBound = this.beatRefs[idx];
        this.rightBound.current.toggleRight();
        this.rightBoundNum = idx;
    }

    goForward() {
        this.scrollBar.current.scrollBy(50 * this.speed, 0);
    }

    goBackward() {
        this.scrollBar.current.scrollBy(-50 * this.speed, 0);
    }

    componentDidMount() {
        this.rightOffset = ReactDOM.findDOMNode(this.beatRefs[this.numBeats - 1].current).getBoundingClientRect().right;
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
                       loopingPrompt={this.props.loopingPrompt}
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