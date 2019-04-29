import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyNavBar extends React.Component {
    render(){
        return (
        <Navbar>
            <Navbar.Toggle children={<h1>WTF</h1>} />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default MyNavBar;