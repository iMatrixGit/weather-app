import Immutable from 'immutable';
import { CONSUME_FORECAST_DATA } from '../constants/forecast'

const initialDailyForecastState = Immutable.Map({
    'dt': null,
    'temp': Immutable.Map({}),
    'pressure': 936.02,
    'humidity': 60,
    'weather': Immutable.List([
        Immutable.Map({
            'id': 800,
            'main': 'Clear',
            'description': 'sky is clear',
            'icon': '01d'
        })
    ]),
    'speed': 2.87,
    'deg': 309,
    'clouds': 0
});

const initialState = Immutable.Map({
    days: Immutable.List()
});

export default function (state = initialState, action) {
    switch (action.type) {
        case CONSUME_FORECAST_DATA:
            state = state.set('days', Immutable.fromJS(action.payload.days));
            break;
        default:
            break;
    }

    return state;
}