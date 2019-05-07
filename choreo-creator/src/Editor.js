import React from 'react';

import { Link } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';
import AudioTrack from './components/AudioTrack';

function Editor() {
    return (
        <div>
            <MyNavBar className="MyNavBarFlex" back='/' back_label='Done'/>
            <AudioTrack/>
        </div>
    );
}

export default Editor;
