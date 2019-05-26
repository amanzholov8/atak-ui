import React from 'react';

import './MyNavBar.css';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import * as firebase from 'firebase';


class MyNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            back: props.back || '/',
            back_label: props.back_label || 'BACK',
            show: props.show,
            toggleShow: props.toggleShow,
            active: false,
            looping: false
        }
        this.playBtn = React.createRef();
        this.pauseBtn = React.createRef();
        this.helpBtn = React.createRef();
        this.editBtn = React.createRef();
        this.loopBtn = React.createRef();
        this.backwardBtn = React.createRef();
        this.forwardBtn = React.createRef();
        this.undoBtn = React.createRef();
    }

    commonUndo(){
        //UNDO FOR AUDIOTRACK
        /*const newKey = firebase.database().ref(`/audio/`);
        newKey.remove();
        window.location.reload();*/

        //UNDO FOR TRACKTIMELINE
        const beatsRef = firebase.database().ref('/beats/');
        const historyItemRef = firebase.database().ref("/history/").limitToLast(1);
        historyItemRef.once('value', function(childSnapshot) {
            const obj = childSnapshot.val();
            if (obj) {
                const key = Object.keys(obj)[0];
                beatsRef.set(obj[key], () => {
                    const removeRef = firebase.database().ref(`/history/${key}/`);
                    removeRef.remove();
                    window.location.reload();
                });
            };
        });
    }

    render(){
        const { show } = this.state;
        return (
            <Navbar className="MyNavBar">
            <Navbar.Collapse className="justify-content-left pull-left">
                <Navbar.Toggle/>
                <Nav.Item id="back">
                <Button variant="outline-primary" ref = {this.editBtn}>
                    <Link to={this.state.back}>
                        <span className="NavBarButton">{this.state.back_label}</span>
                    </Link>
                </Button>
                </Nav.Item>
                <Nav.Item id='undoBtn'>
                    <Button variant='outline-primary'
                        ref ={this.undoBtn}
                        onClick={()=>this.commonUndo()}>
                        <span className="NavBarButton">UNDO</span>
                    </Button>
                </Nav.Item>
                <Overlay target={this.editBtn.current} show={this.props.show} placement="bottom">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                     Edit music for choreo.
                    </Tooltip>
                )}
                </Overlay>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-center Center">

                <Nav.Item>
                    <Button variant='outline-primary' className="NavBarVertical" ref={this.backwardBtn} onClick={this.props.goBackward}>
                        <FontAwesomeIcon icon='backward' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' ref={this.playBtn} onClick={() => {
                        this.setState({
                            active: !this.state.active
                        });
                        this.props.togglePlay();
                    }}>
                        <FontAwesomeIcon icon={this.state.active ? 'pause' : 'play'} size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' className="NavBarVertical" ref={this.forwardBtn} onClick={this.props.goForward}>
                        <FontAwesomeIcon icon='forward' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' ref ={this.loopBtn} className={this.state.looping ? 'activeLoop' : 'inactiveLoop'} onClick={() => {
                        this.setState({
                            looping: !this.state.looping
                        });
                        this.props.loopRegionControl();
                    }}>
                        <span className="NavBarButton">LOOP</span>
                    </Button>
                </Nav.Item>
                <Overlay target={this.backwardBtn.current} show={this.props.show} placement="left">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Go 10 seconds back
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.playBtn.current} show={this.props.show} placement="bottom">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Play/pause track
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.pauseBtn.current} show={this.props.show} placement="bottom">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Pause track
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.forwardBtn.current} show={this.props.show} placement="right">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Go 10 seconds forward
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.loopBtn.current} show={this.props.show} placement="bottom">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Loop any part of the track
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.undoBtn.current} show={this.props.show} placement="right">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Goes one step back
                    </Tooltip>
                )}
                </Overlay>

            </Navbar.Collapse>
            <Navbar.Collapse >
                <Nav.Item id='helpBtn'>
                    <Button variant='outline-primary'onClick={this.state.toggleShow}
                        ref ={this.helpBtn}>
                        <span className="NavBarButton">HELP</span>
                    </Button>
                </Nav.Item>

            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar;