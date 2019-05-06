import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

class MyNavBar extends React.Component {
    render(){
        return (
        <Navbar>
            <Navbar.Toggle children={<h1>WTF</h1>} />
            <Navbar.Collapse className="justify-content-center">
            <Nav className="justify-content-between">
                <Nav.Item>
                    <Button variant='primary'>
                        <FontAwesomeIcon icon='play' size='3x'/>
                    </Button>
                </Nav.Item>
                <Nav.Item>
                  <Button variant='primary'>
                        <FontAwesomeIcon icon='pause' size='3x'/>
                    </Button>
                    
                </Nav.Item>
                <Button variant='primary'>
                        LOOP
                    </Button>
                <Nav.Item>

                <Nav.Item>
                    <Button variant='primary'> HELP </Button>
                </Nav.Item>

                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default MyNavBar;