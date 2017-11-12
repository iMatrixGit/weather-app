import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { COUNTRY_FLAGS_CDN_URL } from '../constants/utils';
import { Text, Loader, TemperatureAggregated, Image } from '../components';
import {
  aggregatedMinTempSelector,
  aggregatedMaxTempSelector
} from '../utils/selectors';

class CityInfoContent extends PureComponent {
  render () {
    const { country, text, minLow, minHigh, maxLow, maxHigh } = this.props;

    return (
      <div className="info-content">
        <Image
          src={`${COUNTRY_FLAGS_CDN_URL}${country.toLowerCase()}.svg`}
          width={32}
          height={28}
        />
        <Text className="city-name" text={text} />
        <TemperatureAggregated
          minLow={minLow}
          minHigh={minHigh}
          maxLow={maxLow}
          maxHigh={maxHigh}
        />
      </div>
    )
  }

}

class CityInfoContainer extends PureComponent {
    renderContent() {
        const { isLoading, name, country, aggregatedMinTemp, aggregatedMaxTemp } = this.props;
        const text = `${name}, ${country}`;

        if (!isLoading && !name) {
            return <Text className="no-results" text="No results" />
        }

        return (
            <CityInfoContent
              text={text}
              country={country}
              minLow={aggregatedMinTemp.get(0)}
              minHigh={aggregatedMinTemp.get(1)}
              maxLow={aggregatedMaxTemp.get(0)}
              maxHigh={aggregatedMaxTemp.get(1)}
            />
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
  isLoading: false
}

CityInfoContainer.propTypes = {
  'name': PropTypes.string.isRequired,
  'country': PropTypes.string.isRequired
}

export default connect(
    state => ({
        name: state.city.get('name'),
        country: state.city.get('country'),
        aggregatedMinTemp: aggregatedMinTempSelector(state),
        aggregatedMaxTemp: aggregatedMaxTempSelector(state),
        isLoading: state.loaders.get('forecast-info')
    })
)(CityInfoContainer);