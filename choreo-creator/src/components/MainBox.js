import React from 'react';

import MyNavBar from './MyNavBar';
import TrackTimeline from './TrackTimeline';
import MediaModal from './MediaModal';
import './MainBox.css';

class MainBox extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            modalShow: false,
            bitSelected: "0-0" 
        };
        this.openModal = this.openModal.bind(this);
        this.setBitSelected = this.setBitSelected.bind(this);
    }

    openModal = () => {
        this.setState({
            modalShow: true
        })
    }

    setBitSelected = () => {
        this.setState({
            bitSelected: `1-1`
        });
        console.log("disn");
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
                bitSelected={this.state.bitSelected}
                onHide={modalClose}
              />              
            </div>
        );
    }
}

export default MainBox;