import React from 'react';

import './MyNavBar.css'

import Navbar from 'react-bootstrap/Navbar';
<<<<<<< HEAD
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
=======
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
>>>>>>> e7c7d19a42a6a057c978837debd7d1e2a834f8c1

import { Link } from 'react-router-dom'

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
                <Navbar.Collapse>
                    <Button variant='outline-primary'>
                        <FontAwesomeIcon icon='pause' size='2x'/>
                    </Button>
                    <Button variant='outline-primary'>
                        <FontAwesomeIcon icon='play' size='2x'/>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar;