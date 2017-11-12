import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { cityReducer, forecastReducer, searchReducer, loadersReducer } from './app/reducers';
import App from './app/App';
import rootSaga from './app/sagas';
import Perf from 'react-addons-perf'

if (process.env.NODE_ENV !== 'production') {
  let createClass = React.createClass;

  window.Perf = Perf

  Object.defineProperty(React, 'createClass', {
    set: (nextCreateClass) => {
      createClass = nextCreateClass;
    }
  });

  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    city: cityReducer,
    forecast: forecastReducer,
    search: searchReducer,
    loaders: loadersReducer
});

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);