import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { COUNTRY_FLAGS_CDN_URL } from '../constants/utils';
import { Text, Loader, TemperatureAggregated, Image } from '../components';
import { aggregatedTempSelector } from '../utils/selectors';

class CityInfoContainer extends PureComponent {
    renderContent() {
        const { isLoading, name, country, aggregatedTemp } = this.props;
        const text = `${name}, ${country}`;

        if (!isLoading && !name) {
            return <Text className="no-results" text="No results" />
        }

        return (
            <div className="info-content">
                <Image
                    src={`${COUNTRY_FLAGS_CDN_URL}${country.toLowerCase()}.svg`}
                    width={32}
                    height={28}
                />
                <Text className="city-name" text={text} />
                <TemperatureAggregated
                    minLow={aggregatedTemp.getIn(['min', 0])}
                    minHigh={aggregatedTemp.getIn(['min', 1])}
                    maxLow={aggregatedTemp.getIn(['max', 0])}
                    maxHigh={aggregatedTemp.getIn(['max', 1])}
                />
            </div>
        );
    }

    render() {
        const { isLoading } = this.props;

        return (
            <div className="city-info-wrapper">
                { isLoading ? <Loader /> : this.renderContent() }
            </div>
        );
    }
}

CityInfoContainer.defaultProps = {
    'name': '',
    'country': ''
};

CityInfoContainer.propTypes = {
    'name': PropTypes.string.isRequired,
    'country': PropTypes.string.isRequired
};

export default connect(
    state => ({
        name: state.city.get('name'),
        country: state.city.get('country'),
        aggregatedTemp: aggregatedTempSelector(state),
        isLoading: state.loaders.get('forecast-info')
    }),
    dispatch => bindActionCreators({}, dispatch)
)(CityInfoContainer);