import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'

import Beat from './components/Beat'
import MyNavBar from './components/MyNavBar';
import TrackTimeline from './components/TrackTimeline'
import MainBox from './components/MainBox'

import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <MainBox />
  );
}

export default App;
