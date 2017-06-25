import forecastSaga from './forecast';

export default function* rootSaga() {
    yield [
        forecastSaga()
    ];
}