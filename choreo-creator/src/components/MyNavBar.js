import React from 'react';

import './MyNavBar.css';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import * as firebase from 'firebase';
class CustomToggle extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
  
      this.props.onClick(e);
    }
  
    render() {
      return (
        <Dropdown.Toggle href="" onClick={this.handleClick}>
          {this.props.children}
        </Dropdown.Toggle>
      );
    }
  }
class MyNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            back: props.back || '/',
            back_label: props.back_label || 'BACK',
            show: props.show,
            toggleShow: props.toggleShow,
            toggleLoopingPrompt: props.toggleLoopingPrompt,
            active: false,
            looping: false,
            atTrackTimeline: props.trackTimeline,
            speed: props.speed,
            setSpeed: props.setSpeed
        }
        this.changeSpeed = this.changeSpeed.bind(this);
        this.playBtn = React.createRef();
        this.pauseBtn = React.createRef();
        this.helpBtn = React.createRef();
        this.editBtn = React.createRef();
        this.loopBtn = React.createRef();
        this.backwardBtn = React.createRef();
        this.forwardBtn = React.createRef();
        this.undoBtn = React.createRef();
        this.speedBtn = React.createRef();
    }

    changeSpeed(e){
        console.log('hello');
        let newSpeed = parseInt(e.target.getAttribute('value'));
        console.log(newSpeed)
        /*this.setState({ speed: newSpeed});
        console.log(this.state.speed);*/
        this.state.setSpeed(newSpeed);
    }

    commonUndo(){
        const atTrackTimeline = this.state.atTrackTimeline;
        if (atTrackTimeline) {
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
        } else {
            const newKey = firebase.database().ref(`/audio/`);
            newKey.remove();
            window.location.reload();
        }
    }

    render(){
        const { show } = this.state;
        const { speed} = this.state;
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
                    
                    {/* <Button variant='outline-primary' ref ={this.speedBtn}  onClick={() => {
                        // this.setState({
                        //     looping: !this.state.looping
                        // }, () => {
                        //     this.state.toggleLoopingPrompt(this.state.looping);
                        // });
                        // this.props.loopRegionControl();
                    }}>
                        <span className="NavBarButton">SPEED</span>
                    </Button> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" ref={this.speedBtn}>
                            SPEED
                        </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" eventKey="1" onClick={this.changeSpeed} value={2}>0.25x</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey="2" onClick={this.changeSpeed} value={4}>0.5x</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="3" onClick={this.changeSpeed} value={6}>0.75x</Dropdown.Item>
                        <Dropdown.Item href="#/action-1" eventKey="4" onClick={this.changeSpeed} value={8} active>1x</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey="5" onClick={this.changeSpeed} value={10}>1.25x</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey="6" onClick={this.changeSpeed} value={12}>1.5x</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="7" onClick={this.changeSpeed} value={14}>1.75x</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="8" onClick={this.changeSpeed} value={16}>2x</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' className="NavBarVertical" ref={this.backwardBtn} onClick={() => {
                        this.props.goBackward();
                        this.state.toggleLoopingPrompt(false);
                    }}>
                        <FontAwesomeIcon icon='backward' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' ref={this.playBtn} onClick={() => {
                        this.setState({
                            active: !this.state.active
                        });
                        this.props.togglePlay();
                        this.state.toggleLoopingPrompt(false);
                    }}>
                        <FontAwesomeIcon icon={this.state.active ? 'pause' : 'play'} size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' className="NavBarVertical" ref={this.forwardBtn} onClick={() => {
                        this.props.goForward();
                        this.state.toggleLoopingPrompt(false);
                    }}>
                        <FontAwesomeIcon icon='forward' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' ref ={this.loopBtn} className={this.state.looping ? 'activeLoop' : 'inactiveLoop'} onClick={() => {
                        this.setState({
                            looping: !this.state.looping
                        }, () => {
                            this.state.toggleLoopingPrompt(this.state.looping);
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
                <Overlay target={this.forwardBtn.current} show={this.props.show} placement="bottom">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Go 10 seconds forward
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.loopBtn.current} show={this.props.show} placement="right">
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