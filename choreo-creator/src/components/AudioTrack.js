import React from 'react';

import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import './AudioTrack.css';


class AudioTrack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prompt: false
    };
    this.buttonRef = React.createRef();
  }

  selects(event, darkColor){
    if (event.target.id != 'clicked' && event.buttons == 1) {
      event.target.style.background = darkColor;
      event.target.id = 'clicked';
    }
    
  }

  removes(event, k) {
    var parts = document.getElementsByClassName(`part${k}`);
    for ( var i = 0; i < parts.length; i++ ){
      if (parts[i].id=="clicked") {
        parts[i].style.visibility = 'hidden';
        parts[i].id = 'dblclicked';
      }
    }
  }

  renderPart(i, color, darkColor) {
            return (
                <button className= {`part${i}`}
                        style = {{background: `${color}`, 
                                  width: '8.5em', height: '7em',
                                  marginRight: '-1px', marginTop: '-1px'}}
                        onMouseEnter = {(event)=> this.selects(event, darkColor)}
                        onMouseDown = {(event)=> this.selects(event, darkColor)}
                        onDoubleClick = {(event) => this.removes(event, i)}>
                </button>
              );
          }

  render() {
		return (
			<div>
          <div id='name1'>Do you wanna know.mp3</div>
          <div id = 'AudioTrack1'>
				    {this.renderPart(1, '#9370DB', '#4B0082')}
            {this.renderPart(1, '#9370DB', '#4B0082')}
            {this.renderPart(1, '#9370DB', '#4B0082')}
            {this.renderPart(1, '#9370DB', '#4B0082')}
            {this.renderPart(1, '#9370DB', '#4B0082')}
            {this.renderPart(1, '#9370DB', '#4B0082')}
            {this.renderPart(1, '#9370DB', '#4B0082')}
          </div>

          <div id='name2'>Payphone.mp3</div>
          <div id = 'AudioTrack2'>
            {this.renderPart(2, '#32CD32', '#006400')}
            {this.renderPart(2, '#32CD32', '#006400')}
            {this.renderPart(2, '#32CD32', '#006400')}
            {this.renderPart(2, '#32CD32', '#006400')}
            {this.renderPart(2, '#32CD32', '#006400')}
          </div>

          <div id='name3'>Mind in awe.mp3</div>
          <div id = 'AudioTrack3'>
            {this.renderPart(3, '#FFD700', '#8B4513')}
            {this.renderPart(3, '#FFD700', '#8B4513')}
            {this.renderPart(3, '#FFD700', '#8B4513')}
            {this.renderPart(3, '#FFD700', '#8B4513')}
            {this.renderPart(3, '#FFD700', '#8B4513')}
            {this.renderPart(3, '#FFD700', '#8B4513')}
            {this.renderPart(3, '#FFD700', '#8B4513')}
          </div>
          


			</div>);
	}
}

export default AudioTrack;