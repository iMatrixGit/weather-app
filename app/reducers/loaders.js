import Immutable from 'immutable';
import { START_LOADING, STOP_LOADING } from '../constants/loaders';

const initialState = Immutable.Map({});

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            state = state.set(action.payload.name, true);
            break;
        case STOP_LOADING:
            state = state.remove(action.payload.name);
            break;
        default:
            break;
    }

    return state;
}