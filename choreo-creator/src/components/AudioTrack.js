import React from 'react';

//import Popover from 'react-bootstrap/Popover';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './AudioTrack.css';

import * as firebase from 'firebase';

class AudioTrack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deleted: []
    };
  }



  selects(event, darkColor){
    if (event.target.id != 'clicked' && event.buttons == 1) {
      event.target.style.background = darkColor;
      event.target.id = 'clicked';
    } 
  }

  removes(k) {
    var parts = document.getElementsByClassName(`part${k}`);
    for ( var i = 0; i < parts.length; i++ ){
      if (parts[i].id=="clicked") {
        parts[i].style.visibility = 'hidden';
        parts[i].id = 'dblclicked';
        this.sendBeat(k, i);
      }
    }
  }
  sendBeat(i, ind){
    const newKey = firebase.database().ref(`/audio/${i}-${ind}/`);
    newKey.set({
      type: 'hidden',
      i: i,
      ind: ind
    });
  }

  componentWillMount() {
    let beatRef = firebase.database().ref(`/audio/`);
    beatRef.once('value', snapshot => {
        let st = snapshot.val();
        if (st) {
            this.setState({
                deleted: Object.values(st)
            });
        };
    });
  }

  renderBeat(a, b) {
    return (
      <button className = {`bar${a} beat${b}`}
            style = {{background: '#F5F5F5', width: '9em', height: '4em', 
                    marginRight: '-1px', marginTop: '-1px'}}>
        {a}:{b}            
      </button>
    )
  }

  renderPart(i, color, darkColor, ind) {
    /*const popover = (
      <Popover id="popover-basic">
        Press and drag to select SEVERAL parts to remove 
        <br/>
        OR
        <br/>
        Double click to remove 
      </Popover>
    );*/
    let isDeleted = false;
    let deleted = this.state.deleted;
    let j = 0;
    for (j in deleted){
      console.log(deleted[j].i +" "+deleted[j].ind)
      if(deleted[j].i == i && deleted[j].ind == ind){
        console.log("here");
        isDeleted = true
      }

    }
    return (
        //<OverlayTrigger trigger="hover" placement="top" overlay={popover}>
          <button className= {`part${i}`}
                style = {{background: `${color}`, 
                          width: '9em', height: '7em',
                          marginRight: '-1px', marginTop: '-1px', 
                          visibility: isDeleted ? 'hidden' : 'visible'}}
                onMouseEnter = {(event)=> this.selects(event, darkColor)}
                onMouseDown = {(event)=> this.selects(event, darkColor)}
                onDoubleClick = {() => this.removes(i)}>
          </button>
        //</OverlayTrigger>
      );

  }

  render() {
    console.log(this.state.deleted);
		return (
			<div className="AudioTrack">
          <div id='beatBar'>
            {this.renderBeat(1, 1)}
            {this.renderBeat(1, 2)}
            {this.renderBeat(1, 3)}
            {this.renderBeat(1, 4)}
            {this.renderBeat(2, 1)}
            {this.renderBeat(2, 2)}
            {this.renderBeat(2, 3)}
            {this.renderBeat(2, 4)}
          </div>

          <div id='name1'>Do you wanna know.mp3</div>
          <div id='audio1'>
				    <span style={{marginLeft: 9+'em'}}>{this.renderPart(1, '#9370DB', '#4B0082', 0)}</span>
            {this.renderPart(1, '#9370DB', '#4B0082', 1)}
            {this.renderPart(1, '#9370DB', '#4B0082', 2)}
            {this.renderPart(1, '#9370DB', '#4B0082', 3)}
            {this.renderPart(1, '#9370DB', '#4B0082', 4)}
            {this.renderPart(1, '#9370DB', '#4B0082', 5)}
            {this.renderPart(1, '#9370DB', '#4B0082', 6)}
          </div>

          <div id='name2'>Payphone.mp3</div>
          <div id='audio2'>
            <span style={{marginLeft: 18+'em'}}>{this.renderPart(2, '#32CD32', '#006400', 0)}</span>
            {this.renderPart(2, '#32CD32', '#006400', 1)}
            {this.renderPart(2, '#32CD32', '#006400', 2)}
            {this.renderPart(2, '#32CD32', '#006400', 3)}
          </div>

          <div id='name3'>Mind in awe.mp3</div>
          <div id='audio3'>
            <span style={{marginLeft: 0+'em'}}>{this.renderPart(3, '#FFD700', '#8B4513', 0)}</span>
            {this.renderPart(3, '#FFD700', '#8B4513', 1)}
            {this.renderPart(3, '#FFD700', '#8B4513', 2)}
            {this.renderPart(3, '#FFD700', '#8B4513', 3)}
            {this.renderPart(3, '#FFD700', '#8B4513', 4)}
            {this.renderPart(3, '#FFD700', '#8B4513', 5)}
            {this.renderPart(3, '#FFD700', '#8B4513', 6)}
          </div>
			</div>);
	}
}

export default AudioTrack;