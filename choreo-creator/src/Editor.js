import React from 'react';

import { Link } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';

function Editor() {
    return (
        <div>
            <MyNavBar className="MyNavBarFlex" back='/' back_label='Done'/>
        </div>
    );
}

export default Editor;
