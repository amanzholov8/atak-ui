import React from 'react';

import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import './AudioTrack.css';

class AudioTrack extends React.Component {
	render() {
		return (
			<div>
				<br/>
				<br/>
				<Figure>
  					<Figure.Image
  						id = 'track1'
    					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEWojtemjNWnjdaqkdWpj9iqkNepj9aiiNGiiM+oj9Oli9Kki8+hh86njtGli9Gsk9dUMfblAAACC0lEQVR4nO3Y7W6CQBBG4QErssvX/d9td1EQW5s00c3mHc8T059kTmBHrF2OmqZtGye2JnsMdFTY3CLtMTAlVp7qnX4W1p6ngMfCxtP9ux22nGXHO+joEO6Je2Hj6Q4+sMMdrD1LGeZ1yezMc+D6VJrDL/rdVlh7jsI+oLD2AMVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQ3+cWtvmz/XlVe7jcq1faJvr3laz1jkJ9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UajPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4TF/eUaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+qzzjkJ9FOqzs3cU6qNQ3wcUnryjUB+F+ijUR6E+CvWlwmVZak9RkoWcWHuKkiyE2iMUZsNUe4TCUqHzm2jD4L2w72PsurRuak9SQt6he6FLt8KUODt9UpdTONmYEvvZ67oJU7BxTfT5nRGmaZjskvXD3HXn2gO907o4QzcP87XwEmPjat1cX0S7mJbMrTBtm9g5O4shxFTYb4U5cXb1jpoOYQoc74UpMb3A+UkM0zDkHXoo7H0X3g+j/Glcl0zIS2Zcq54Wiv8kDmGa4/PCdd+k1xvl/2vk2dMTuj6gvwrH/H4T088p7eOYT+Afhfs9lBbCFngt/AZfdlNfGVAg6AAAAABJRU5ErkJggg=="
  					/>	
  				</Figure>

  				<Figure>
  					<Figure.Image
  						id = 'track2'
    					src="http://www.psychegames.com/responsive/imgs/greencolor.gif"
  					/>	
  				</Figure>

  				<Figure>
  					<Figure.Image
  						id = 'track3'
    					src="https://www.officemax.co.nz/images/ProductImages/500/2346419.jpg"
  					/>	
  				</Figure>
			</div>);
	}
}

export default AudioTrack;