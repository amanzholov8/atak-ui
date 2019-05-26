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
            active: false,
            expNadpis: "gogoDauiiDauii"
        };
        this.trackPlayer = React.createRef();
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

    togglePlay = () => {
        this.setState({
            active: !this.state.active
        }, () => {
            if(this.state.active){
                console.log('1');
                this.trackPlayer.current.playTrack();
                console.log('2');
            }
            else {
                console.log('3');
                this.trackPlayer.current.pauseTrack();
            }
        });
        
    }

    loopRegionControl = () => {
        if(this.trackPlayer.current.leftBound && this.trackPlayer.current.rightBound){
            let l = ReactDOM.findDOMNode(this.trackPlayer.current.leftBound.current);
            let r = ReactDOM.findDOMNode(this.trackPlayer.current.rightBound.current);
            let tmp = ReactDOM.findDOMNode(this.trackPlayer.current.playHead.current);
            this.trackPlayer.current.loopRegion(l.offsetLeft, r.getBoundingClientRect().right, tmp.offsetLeft);
        }
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="MainBox" ref={this.MainBox}>
              <MyNavBar
                className="MyNavBarFlex"
                back='/EDIT' back_label='EDIT AUDIO'
                toggleShow={this.toggleShow}
                show={this.state.show}
                togglePlay={this.togglePlay}
                active={this.active}
                loopRegionControl={this.loopRegionControl}
            />
              <TrackTimeline
                className="TrackTimelineFlex"
                openModal={this.openModal}
                openGalery ={this.openGalery}
                setBeatSelected={this.setBeatSelected}
                addedImages={this.state.addedImages}
                show={this.state.show}
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