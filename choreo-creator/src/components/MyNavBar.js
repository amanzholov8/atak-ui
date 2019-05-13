import React from 'react';

import './MyNavBar.css'

import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'


class MyNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            back: props.back || '/',
            back_label: props.back_label || 'BACK',
            show: false
        }
        this.playBtn = React.createRef();
        this.pauseBtn = React.createRef();
        this.helpBtn = React.createRef();
        this.editBtn = React.createRef();
        this.loopBtn = React.createRef();
        this.backwardBtn = React.createRef();
        this.forwardBtn = React.createRef();
    }

    render(){
        const { show } = this.state;
        return (
            <Navbar className="MyNavBar">
            <Navbar.Collapse className="justify-content-left pull-left">
                <Navbar.Toggle/>
                <Nav.Item id="back">
                <Button variant="outline-primary" ref = {this.editBtn}>
                    <Link to={this.state.back}><span className="NavBarButton">{this.state.back_label}</span></Link>
                </Button>
                </Nav.Item>
                <Overlay target={this.editBtn.current} show={show} placement="right">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                     Edit music for choreo, after finishing edit, press Done to return to this page.
                    </Tooltip>
                )}
                </Overlay>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-center">

                <Nav.Item>
                    <Button variant='outline-primary' className="NavBarVertical" ref={this.backwardBtn}>
                        <FontAwesomeIcon icon='backward' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' ref={this.playBtn}>
                        <FontAwesomeIcon icon='play' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                  <Button variant='outline-primary' ref={this.pauseBtn}>
                        <FontAwesomeIcon icon='pause' size='2x'/>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary' className="NavBarVertical" ref={this.forwardBtn}>
                        <FontAwesomeIcon icon='forward' size='2x'/>
                    </Button>
                </Nav.Item>                

                <Nav.Item>
                    <Button variant='outline-primary' ref ={this.loopBtn}>
                        <span className="NavBarButton">LOOP</span>
                    </Button>
                </Nav.Item>
                <Overlay target={this.playBtn.current} show={show} placement="left">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Play the track.
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.pauseBtn.current} show={show} placement="bottom">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Pause the track.
                    </Tooltip>
                )}
                </Overlay>
                <Overlay target={this.loopBtn.current} show={show} placement="right">
                    {props => (
                    <Tooltip id="overlay-example" {...props}>
                    Loop any part of the track.
                    </Tooltip>
                )}
                </Overlay>

            </Navbar.Collapse>
            <Navbar.Collapse >
                <Nav.Item id='helpBtn'>
                    <Button variant='outline-primary'onClick={() => this.setState({ show: !show })}
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