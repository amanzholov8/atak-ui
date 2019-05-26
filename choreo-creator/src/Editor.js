import React from 'react';

import MyNavBar from './components/MyNavBar'
import AudioTrack from './components/AudioTrack';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
        this.isPlaying = false;
    }

    playAudio() {
        this.isPlaying = !this.isPlaying;
        if(this.isPlaying){
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    }

    render(){
        return (
            <div>
                <MyNavBar
                    className="MyNavBarFlex"
                    togglePlay={this.playAudio}
                    trackTimeline={false}/>
                <AudioTrack />
            </div>
        );
    }
}

export default Editor;
