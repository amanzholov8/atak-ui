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
            bitselected: "0-0" 
        };
        //this.openModal = this.openModal.bind(this);
        //this.setBitSelected = this.setBitSelected.bind(this);
    }

    openModal = (bar, beat) => {
        this.setState({
            modalShow: true,
            bitselected: `${bar}-${beat}`
        });
        console.log(`${bar}-${beat}`);
        console.log(this.state.bitselected);
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="MainBox" ref={this.MainBox}>
              <MyNavBar className="MyNavBarFlex" back='/edit' back_label='Edit Audio'/>
              <TrackTimeline 
                className="TrackTimelineFlex" 
                openModal={this.openModal} 
                setBitSelected={this.setBitSelected}
                />
              <MediaModal
                show={this.state.modalShow}
                bitselected={this.state.bitselected}
                onHide={modalClose}
              />              
            </div>
        );
    }
}

export default MainBox;