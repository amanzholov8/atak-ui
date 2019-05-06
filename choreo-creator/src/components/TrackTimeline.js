import React from 'react';

import './TrackTimeline.css'

import Beat from "./Beat";

class TrackTimeline extends React.Component {

    constructor(props){
        super(props);

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
            <div className="TrackTimeline" ref={this.scrollBar}>
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