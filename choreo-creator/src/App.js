import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'

import Beat from './components/Beat'
import MyNavBar from './components/MyNavBar';
import TrackTimeline from './components/TrackTimeline'

import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="mainDiv">
      <MyNavBar className="MyNavBarFlex" back='/edit' back_label='Edit Audio'/>
      <TrackTimeline className="TrackTimelineFlex"/>
    </div>
  );
}

export default App;
