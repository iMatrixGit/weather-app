import React, { PureComponent, PropTypes } from 'react';
import { TemperatureRange } from '.';

export default class TemperatureAggregated extends PureComponent {
    render() {
        const { minLow, minHigh, maxLow, maxHigh } = this.props;

        return (
            <div className="aggregated-temp">
                <TemperatureRange
                    className="aggregated-min"
                    min={minLow}
                    max={minHigh}
                />
                <TemperatureRange
                    className="aggregated-max"
                    min={maxLow}
                    max={maxHigh}
                />
            </div>
        );
    }
}

TemperatureAggregated.defaultProps = {
    'minLow': 0,
    'minHigh': 0,
    'maxLow': 0,
    'maxHigh': 0
};

TemperatureAggregated.propTypes = {
    'minLow': PropTypes.number.isRequired,
    'minHigh': PropTypes.number.isRequired,
    'maxLow': PropTypes.number.isRequired,
    'maxHigh': PropTypes.number.isRequired
};