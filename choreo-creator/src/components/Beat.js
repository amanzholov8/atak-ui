import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Beat.css';
import * as firebase from 'firebase';

class Beat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bar: props.bar,
            beat: props.beat,
            openModal: props.openModal,
            media: props.addedImages,
            show: props.show,
            left: false,
            right: false
        }
        this.plusBtn = React.createRef();
        this.beatHeader = React.createRef();
        this.beatBody = React.createRef();
    }

    componentDidMount() {
        let beatRef = firebase.database().ref(`/beats/${this.props.bar}-${this.props.beat}/`);
        beatRef.on('value', snapshot => {
            let allMedia = snapshot.val();
            if (allMedia) {
                this.setState({
                    media: allMedia
                });
            };
        });
    }

    onPlusClick = () => {
        this.state.openModal(this.state.bar, this.state.beat);
    }

    toggleLeft() {
        this.setState({
            left: !this.state.left
        });
    }

    toggleRight() {
        this.setState({
            right: !this.state.right
        });
    }

    deleteImage = imageId => {
        const removeRef = firebase.database().ref(`/beats/${this.props.bar}-${this.props.beat}/${imageId}`);
        const beatsRef = firebase.database().ref('/beats/');

        beatsRef.once('value', snapshot => {
            firebase.database().ref('/history/').push(snapshot.val(), () => {
                if (Object.keys(this.state.media).length === 1) {
                    removeRef.remove();
                    this.setState({
                        media: []
                    });
                } else {
                    removeRef.remove();
                }
            });
        });
    }

    render() {
        let beatLabel = "";
        if(this.state.left){
            beatLabel += "Start";
        }
        beatLabel += ` ${this.state.bar}:${this.state.beat} `;
        if(this.state.right){
            beatLabel += "End";
        }
        return (
            <Card className='Beat'>
                {/*BEAT HEADER*/}
                <Card.Header ref={this.beatHeader}
                             className='Beat-header'
                             onClick={() => {this.props.selectLeftBound(this.state.bar, this.state.beat)}}
                             onContextMenu={(e) => {e.preventDefault(); this.props.selectRightBound(this.state.bar, this.state.beat)}}>
                                {beatLabel}
                </Card.Header>
                {/*BEAT BODY*/}
                <Card.Body ref={this.beatBody} className='Beat-body'>
                    {/*INSERT MEDIA, PICTURES*/}
                    {
                        Object.keys(this.state.media).map((key) => {
                            let obj = this.state.media[key]
                            if (obj.type === 'image') {
                                return (
                                    <div className="ImageContainer" id={key}>
                                        <img className="BeatItem" id={key} src={obj.src} height="180rem" width="180rem" alt="Custom move"/>
                                        <button className="BeatItemDelete" onClick={() => {this.deleteImage(key)}}>&times;</button>
                                    </div>);
                            } else {
                                return "";
                            }
                        })
                    }
                    {/*PLUS BUTTON*/}
                    <Button className="BeatPlus" variant='outline-primary' onClick={this.onPlusClick} ref={this.plusBtn}>
                        <FontAwesomeIcon icon='plus' size='6x'/>
                    </Button>
                </Card.Body>

                {((this.state.bar === 1) && (this.state.beat === 3)) ?
                    <Overlay target={this.plusBtn.current} show={this.props.show} placement="bottom">
                        {props => (
                        <Tooltip id="overlay-example" {...props}>
                        Add photo, video, sketch, or comment to this beat
                        </Tooltip>
                    )}
                    </Overlay> :
                    <p></p>
                }
                {((this.state.bar === 1) && (this.state.beat === 2)) ?
                    <Overlay target={this.beatHeader.current} show={this.props.show} placement="bottom">
                        {props => (
                        <Tooltip id="overlay-example" {...props}>
                        You can see each beat's number in the format BAR:BEAT
                        </Tooltip>
                    )}
                    </Overlay> :
                    <p></p>
                }
                {((this.state.bar === 1) && (this.state.beat === 1)) ?
                    <Overlay target={this.beatBody.current} show={this.props.show} placement="right">
                        {props => (
                        <Tooltip id="overlay-example" {...props}>
                        One box represents one beat of the audio track
                        </Tooltip>
                    )}
                    </Overlay> :
                    <p></p>
                }
                {((this.state.bar === 1) && (this.state.beat === 1)) ?
                    <Overlay target={this.beatHeader.current} show={this.props.loopingPrompt} placement="bottom">
                        {props => (
                        <Tooltip id="overlay-example" {...props}>
                            Left click to select the left bound for looping. (only in LOOP mode)
                        </Tooltip>
                    )}
                    </Overlay> :
                    <p></p>
                }
                {((this.state.bar === 1) && (this.state.beat === 3)) ?
                    <Overlay target={this.beatHeader.current} show={this.props.loopingPrompt} placement="bottom">
                        {props => (
                        <Tooltip id="overlay-example" {...props}>
                            Right click to select the right bound for looping. (only in LOOP mode)
                        </Tooltip>
                    )}
                    </Overlay> :
                    <p></p>
                }
            </Card>
        );
    }
}

export default Beat;