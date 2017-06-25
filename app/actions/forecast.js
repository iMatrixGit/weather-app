import { FETCH_FORECAST } from '../constants/forecast';
import { CONSUME_FORECAST_DATA } from '../constants/forecast';

export const fetchForecast = ({ by, name = 'Sofia' } = {}) => ({ type: FETCH_FORECAST, payload: { by, name } });

export const consumeForecastData = days => ({
    type: CONSUME_FORECAST_DATA,
    payload: { days }
});