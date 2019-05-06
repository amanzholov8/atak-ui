import React from 'react';

import MyNavBar from './MyNavBar';
import TrackTimeline from './TrackTimeline';
import MediaModal from './MediaModal';
import './MainBox.css';

class MainBox extends React.Component {
    constructor(props){
        super(props);
        this.state = { modalShow: false };
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({
            modalShow: true
        })
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="MainBox" ref={this.MainBox}>
              <MyNavBar className="MyNavBarFlex" back='/edit' back_label='Edit Audio'/>
              <TrackTimeline className="TrackTimelineFlex" openModal={this.openModal}/>
              <MediaModal
                show={this.state.modalShow}
                onHide={modalClose}
              />              
            </div>
        );
    }
}

export default MainBox;