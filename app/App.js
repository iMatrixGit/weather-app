import React, { PureComponent } from 'react';
import { SearchContainer, CityInfoContainer, ForecastInfoContainer } from './containers';

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <SearchContainer />
                <CityInfoContainer />
                <ForecastInfoContainer />
            </div>
        );
    }
}