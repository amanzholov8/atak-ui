import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from './reducers';
import './index.css';
import App from './App';
import Editor from './Editor'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as firebase from 'firebase';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBars, faPlus, faImage, faVideo, faPaintBrush, faComment, faBackward, faForward} from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faPause, faBars, faPlus, faImage, faVideo, faPaintBrush, faComment, faBackward, faForward);

let firebaseConfig = {
    apiKey: "AIzaSyDvgrRF1f4_8G1i28WsKCBbHOtFoYgrdcY",
    authDomain: "cs374-kaist-project.firebaseapp.com",
    databaseURL: "https://cs374-kaist-project.firebaseio.com",
    projectId: "cs374-kaist-project",
    storageBucket: "cs374-kaist-project.appspot.com",
    messagingSenderId: "291409505102",
    appId: "1:291409505102:web:f929c7c6573dcfde"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    //<Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/edit' component={Editor} />
            </div>
        </Router>
    //</Provider>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
