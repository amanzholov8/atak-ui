import React from 'react';

import MyNavBar from './components/MyNavBar'
import AudioTrack from './components/AudioTrack';

class Editor extends React.Component {
    render(){
        return (
            <div>
                <MyNavBar className="MyNavBarFlex"/>
                <AudioTrack />
            </div>
        );
    }
}

export default Editor;
