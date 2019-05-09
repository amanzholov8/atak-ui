import React from 'react';

import MyNavBar from './MyNavBar';
import TrackTimeline from './TrackTimeline';
import MediaModal from './MediaModal';
import './MainBox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

class MainBox extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            modalShow: false,
            beatselected: {bar: 0,
                beat: 0} 
        };
    }

    openModal = (bar, beat) => {
        this.setState({
            modalShow: true,
            beatselected: {bar: bar,
                beat: beat}
        });
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="MainBox" ref={this.MainBox}>
              <MyNavBar className="MyNavBarFlex" back='/EDIT' back_label='EDIT AUDIO'/>
              <TrackTimeline 
                className="TrackTimelineFlex" 
                openModal={this.openModal} 
                openGalery ={this.openGalery}
                setBeatSelected={this.setBeatSelected}
                />
              <MediaModal
                show={this.state.modalShow}
                beatselected={this.state.beatselected}
                onHide={modalClose}
              />
            </div>
        );
    }
}

export default MainBox;