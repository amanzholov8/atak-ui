import React from 'react';

import MyNavBar from './MyNavBar';
import TrackTimeline from './TrackTimeline';
import './MainBox.css';

class MainBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="MainBox">
              <MyNavBar className="MyNavBarFlex" back='/edit' back_label='Edit Audio'/>
              <TrackTimeline className="TrackTimelineFlex"/>
            </div>
        );
    }
}

export default MainBox;