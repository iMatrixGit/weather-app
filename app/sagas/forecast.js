import { takeLatest, call, put } from 'redux-saga/effects';
import services from '../utils/services';
import { FETCH_FORECAST } from '../constants/forecast';
import { consumeCityData } from '../actions/city'
import { consumeForecastData } from '../actions/forecast'
import { startLoading, stopLoading } from '../actions/loaders';

function getCurrentPosition() {
   return new Promise((resolve, reject) => {
       if (!navigator.geolocation) {
           reject('Geolocation is not supported by your browser');
       }

       navigator.geolocation.getCurrentPosition(resolve, reject);
   })
}

function* consumeReceivedData({ city, forecast }) {
    const { id, name, coord: { lat, lon }, country } = city;

    yield put(consumeCityData({ id, name, lat, lon, country }));
    yield put(consumeForecastData(forecast))
}

function* fetchForecastByLocation({ lat: geoLat, lon: geoLon }) {
    try {
        const { city, list: forecast } = yield call(services.getForecast, {
            query: { lat: geoLat.toFixed(4), lon: geoLon.toFixed(4) }
        });

        yield call(consumeReceivedData, { city, forecast });

    } catch (err) {
        console.error(err);
    }
}

function* fetchForecastByCityName(name) {
    try {
        const { city, list: forecast } = yield call(services.getForecast, {
            query: { name }
        });

        yield call(consumeReceivedData, { city, forecast });
    } catch (err) {
        console.error(err);
    }
}

function* onFetchForecast(action) {
    const { by, name } = action.payload;

    yield put(startLoading('forecast-info'));

    try {
        if (by === 'location') {
            const {coords} = yield call(getCurrentPosition);
            const {latitude: lat, longitude: lon} = coords;

            yield call(fetchForecastByLocation, {lat, lon});
        } else if (name) {
            yield call(fetchForecastByCityName, name)
        }
    } catch (err) {
        console.error(err);
    } finally {
        yield put(stopLoading('forecast-info'));
    }
}

function* watchFetchForecast() {
    yield takeLatest(FETCH_FORECAST, onFetchForecast)
}

export default function* authenticationSaga() {
    yield [
        watchFetchForecast()
    ];
}
