import React from 'react';

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './AudioTrack.css';

import * as firebase from 'firebase';

class AudioTrack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deleted: []
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
  componentDidMount() {
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
    const popover = (
      <Popover id="popover-basic">
        Press and drag to select SEVERAL parts to remove 
        <br/>
        OR
        <br/>
        Double click to remove 
      </Popover>
    );
    let isDeleted = false;
    // let deleted = this.state.deleted;
    // let j = 0;
    // for (j in deleted){
    //   console.log(deleted[j].i +" "+deleted[j].ind)
    //   if(deleted[j].i == i && deleted[j].ind == ind-1){
    //     console.log("here");
    //     isDeleted = true
    //   }

    // }
    return (
        <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
          <button className= {`part${i}`}
                style = {{background: `${color}`, 
                          width: '9em', height: '7em',
                          marginRight: '-1px', marginTop: '-1px'}}
                onMouseEnter = {(event)=> this.selects(event, color, darkColor, i)}
                onMouseDown = {(event)=> this.selects(event, color, darkColor, i)}
                onDoubleClick = {(event) => this.removes(event, i)}
                visibility = {isDeleted ? 'hidden' : 'visible'}>
          </button>
        </OverlayTrigger>
      );

  }

  render() {
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
            {this.renderBeat(3, 1)}
          </div>
          <div id='name1'>Do you wanna know.mp3</div>
				    <span style={{marginLeft: 9+'em'}}>{this.renderPart(1, '#9370DB', '#4B0082', 1)}</span>
            {this.renderPart(1, '#9370DB', '#4B0082', 2)}
            {this.renderPart(1, '#9370DB', '#4B0082', 3)}
            {this.renderPart(1, '#9370DB', '#4B0082', 4)}
            {this.renderPart(1, '#9370DB', '#4B0082', 5)}
            {this.renderPart(1, '#9370DB', '#4B0082', 6)}
            {this.renderPart(1, '#9370DB', '#4B0082', 6)}

          <div id='name2'>Payphone.mp3</div>
            <span style={{marginLeft: 18+'em'}}>{this.renderPart(2, '#32CD32', '#006400', 3)}</span>
            {this.renderPart(2, '#32CD32', '#006400', 4)}
            {this.renderPart(2, '#32CD32', '#006400', 5)}
            {this.renderPart(2, '#32CD32', '#006400', 6)}

          <div id='name3'>Mind in awe.mp3</div>
            <span style={{marginLeft: 0+'em'}}>{this.renderPart(3, '#FFD700', '#8B4513', 2)}</span>
            {this.renderPart(3, '#FFD700', '#8B4513', 3)}
            {this.renderPart(3, '#FFD700', '#8B4513', 4)}
            {this.renderPart(3, '#FFD700', '#8B4513', 5)}
            {this.renderPart(3, '#FFD700', '#8B4513', 6)}
            {this.renderPart(3, '#FFD700', '#8B4513', 7)}
            {this.renderPart(3, '#FFD700', '#8B4513', 4)}
			</div>);
	}
}

export default AudioTrack;