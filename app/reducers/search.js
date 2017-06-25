import Immutable from 'immutable';
import { INPUT_SEARCH_TEXT } from '../constants/search'

const initialState = Immutable.Map({
    text: ''
});

export default function (state = initialState, action) {
    switch (action.type) {
        case INPUT_SEARCH_TEXT:
            const { text } = action.payload;

            state = state.set('text', text);
            break;
        default:
            break;
    }

    return state;
}