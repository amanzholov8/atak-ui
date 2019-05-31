import React from 'react';
import ReactDOM from 'react-dom';

import MyNavBar from './MyNavBar';
import TrackTimeline from './TrackTimeline';
import MediaModal from './MediaModal';
import './MainBox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

import * as firebase from 'firebase';

class MainBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            beatselected: {bar: 0,
                beat: 0},
            addedImages: [],
            show: false,
            loopingPrompt: false,
            active: false,
            expNadpis: "gogoDauiiDauii"
        };
        this.trackPlayer = React.createRef();
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('expNadpis');
        rootRef.on('value', snapshot => {
            this.setState({
                expNadpis: snapshot.val()
            });
        })
    }

    openModal = (bar, beat) => {
        this.setState({
            modalShow: true,
            beatselected: {bar: bar,
                beat: beat}
        });
    }

    setimage = (image, bar, beat) => {
        this.setState({
            addedImages: [...this.state.addedImages, {src: image, bar: bar, beat: beat}]
        });
        console.log(`${image} is added to addedImages`);
        console.log(`addedImages now is ${this.state.addedImages.map(obj => obj.src)}`)
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        });
    }

    toggleLoopingPrompt = bool => {
        this.setState({
            loopingPrompt: bool
        });
    }

    togglePlay = () => {
        this.setState({
            active: !this.state.active
        }, () => {
            if(this.state.active){
                this.audio.play();
                this.trackPlayer.current.playTrack();
            }
            else {
                this.audio.pause();
                this.trackPlayer.current.pauseTrack();
            }
        });
    }

    loopRegionControl = () => {
        this.trackPlayer.current.loopRegion();
    }

    goForward = () => {
        this.trackPlayer.current.goForward();
    }

    goBackward = () => {
        this.trackPlayer.current.goBackward();
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="MainBox" ref={this.MainBox}>
              <MyNavBar
                className="MyNavBarFlex"
                back='/EDIT' back_label='EDIT AUDIO'
                toggleShow={this.toggleShow}
                toggleLoopingPrompt={this.toggleLoopingPrompt}
                show={this.state.show}
                togglePlay={this.togglePlay}
                active={this.active}
                loopRegionControl={this.loopRegionControl}
                goForward={this.goForward}
                goBackward={this.goBackward}
                trackTimeline={true}
            />
              <TrackTimeline
                className="TrackTimelineFlex"
                openModal={this.openModal}
                openGalery ={this.openGalery}
                setBeatSelected={this.setBeatSelected}
                addedImages={this.state.addedImages}
                show={this.state.show}
                loopingPrompt={this.state.loopingPrompt}
                ref={this.trackPlayer}
            />
              <MediaModal
                show={this.state.modalShow}
                beatselected={this.state.beatselected}
                onHide={modalClose}
                setimage={this.setimage}
            />
            </div>
        );
    }
}

export default MainBox;