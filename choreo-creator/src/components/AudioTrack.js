import React from 'react';

import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import './AudioTrack.css';


class AudioTrack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  selects(event){
    if (event.target.id != 'clicked' && event.buttons == 1) {
      event.target.style.background = '#4B0082';
      event.target.id = 'clicked';
    }
    
  }

  removes(event) {
    var parts = document.getElementsByClassName('part1');
    for ( var i = 0; i < parts.length; i++ ){
      if (parts[i].id=="clicked") {
        parts[i].style.visibility = 'hidden';
        parts[i].id = 'dblclicked';
      }
    }
  }

  renderPart(style) {
            return (
                <button className="part1" 
                        onMouseEnter = {(event)=> this.selects(event)}
                        onMouseDown = {(event)=> this.selects(event)}
                        onDoubleClick = {(event) => this.removes(event)}>
                </button>
              );
          }

  render() {
		return (
			<div>
				<br/>
				<br/>

          <div id = 'AudioTrack1'>
				    {this.renderPart()}
            {this.renderPart()}
            {this.renderPart()}
            {this.renderPart()}
            {this.renderPart()}
          </div>
          


			</div>);
	}
}

export default AudioTrack;