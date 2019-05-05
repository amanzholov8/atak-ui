import React from 'react';
import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRecycle, faBars, faPlus} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'

import Beat from './components/Beat'
import MyNavBar from './components/MyNavBar';
import TrackTimeline from './components/TrackTimeline'

library.add(faPlay, faPause, faBars, faPlus);

function App() {
  return (
    <div className="mainDiv">
      <MyNavBar className="MyNavBarFlex"/>
      <TrackTimeline className="TrackTimelineFlex"/>
    </div>
  );
}

export default App;
