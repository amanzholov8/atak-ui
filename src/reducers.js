/*import {ACTION_ADD_PHOTO} from "./index";

const initialState = {
	beats: [Array(7).fill({})] //7 is the total number of beats
}

function getBeatIndex(beatselected) {
	return (((beatselected.bar - 1) * 4) + (beatselected.beat - 1)); //4 is the number of beats in each bar
}

export const rootReducer = (state = InitialState, action) => {
	switch (action.type) {
		case ACTION_ADD_PHOTO:
			return { ...state, state.beats[getBeatIndex(action.beatselected)].media: [...beats[getBeatIndex(action.beatselected)].media, action.src]};
	}
	return state;
}*/
