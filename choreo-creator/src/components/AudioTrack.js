import React from 'react';

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './AudioTrack.css';


class AudioTrack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  selects(event, color, darkColor, k){
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

  renderBeat(a, b) {
    return (
      <button className = {`bar${a} beat${b}`}
            style = {{background: '#F5F5F5', width: '8.5em', height: '4em', 
                    marginRight: '-1px', marginTop: '-1px'}}>
        {a}:{b}            
      </button>
    )
  }

  renderPart(i, color, darkColor) {
            const popover = (
              <Popover id="popover-basic">
                Press and drag to select SEVERAL parts to remove 
                <br/>
                OR
                <br/>
                Double click to remove 
              </Popover>
            );
            return (
                <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                  <button className= {`part${i}`}
                        style = {{background: `${color}`, 
                                  width: '8.5em', height: '7em',
                                  marginRight: '-1px', marginTop: '-1px'}}
                        onMouseEnter = {(event)=> this.selects(event, color, darkColor, i)}
                        onMouseDown = {(event)=> this.selects(event, color, darkColor, i)}
                        onDoubleClick = {(event) => this.removes(event, i)}>
                  </button>
                </OverlayTrigger>
              );
          }

  render() {
		return (
			<div>
          <div id='beatBar'>
            {this.renderBeat(1, 1)}
            {this.renderBeat(1, 2)}
            {this.renderBeat(1, 3)}
            {this.renderBeat(1, 4)}
            {this.renderBeat(2, 1)}
            {this.renderBeat(2, 2)}
            {this.renderBeat(2, 3)}
            {this.renderBeat(2, 4)}
            {this.renderBeat(3, 1)}
            {this.renderBeat(3, 2)}
          </div>
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