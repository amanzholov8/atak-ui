import React from 'react';

import './MyNavBar.css'

import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';


class MyNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            back: props.back || 'Back',
            back_label: props.back_label || '/'
        }
    }

    render(){
        return (
            <Navbar className="MyNavBar">
                <Navbar.Toggle/>
                <Button variant="outline-primary">
                    <Link to={this.state.back}>{this.state.back_label}</Link>
                </Button>
                

            <Navbar.Collapse className="justify-content-center">
            <Nav className="justify-content-between">
               
                <Nav.Item>
                    <Button variant='outline-primary'>
                        <FontAwesomeIcon icon='play' size='2x'/>
                    </Button>
                </Nav.Item>
                
                <Nav.Item>
                  <Button variant='outline-primary'>
                        <FontAwesomeIcon icon='pause' size='2x'/>
                    </Button>
                </Nav.Item>
                
                <Nav.Item>
                    <Button variant='outline-primary'>
                        LOOP
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button variant='outline-primary'> HELP </Button>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar;