/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

const INITIAL_STATE = {
	current: [],
};

const photoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_ID':
			const { current } = state;
			const newState = { current };
			return newState;
		default:
			return state;
	}
};



export default combineReducers({
	photo: photoReducer,
});

