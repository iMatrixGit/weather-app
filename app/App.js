import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchContainer, CityInfoContainer, ForecastInfoContainer } from './containers';

class App extends PureComponent {
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

export default connect(
    state => ({}),
    dispatch => bindActionCreators({}, dispatch)
)(App);