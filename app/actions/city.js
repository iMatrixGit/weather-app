import { CONSUME_CITY_DATA } from '../constants/city';

export const consumeCityData = ({ id, name, lat, lon, country }) => ({
    type: CONSUME_CITY_DATA,
    payload: { id, name, lat, lon, country }
});