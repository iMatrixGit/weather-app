import Immutable from 'immutable';
import { CONSUME_CITY_DATA } from '../constants/city'

const initialState = Immutable.Map({
    id: '',
    name: '',
    lat: null,
    lon: null,
    country: ''
});

export default function (state = initialState, action) {
    switch (action.type) {
        case CONSUME_CITY_DATA:
            const { id, name, lat, lon, country } = action.payload;

            state = state.merge({ id, name, lat, lon, country });
            break;
        default:
            break;
    }

    return state;
}