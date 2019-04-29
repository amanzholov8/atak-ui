import React from 'react';
import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRecycle, faBars, faPlus} from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Beat from './components/Beat'
import MyNavBar from './components/MyNavBar';

library.add(faPlay, faPause, faBars, faPlus);

function App() {
  return (
    <div>
    <MyNavBar />
    <Container fluid>
      <Row>
        <Beat bar={1} beat={1}/>
        <Beat bar={1} beat={2}/>
      </Row>
    </Container>
    </div>
  );
}

export default App;
