import React, { PureComponent, PropTypes } from 'react';
import { Text } from '.';

export default class TemperatureRange extends PureComponent {
    getTempText(temp) {
        return `${Math.round(temp)} \u00b0`;
    }

    render() {
        const { min, max, className } = this.props;

        return (
            <div className={`temp-range ${className}`}>
                <Text
                    className="temp temp-min"
                    text={this.getTempText(min)}
                />
                <Text
                    className="temp temp-max"
                    text={this.getTempText(max)}
                />
            </div>
        );
    }
}

TemperatureRange.defaultProps = {
    'min': 0,
    'max': 0
};

TemperatureRange.propTypes = {
    'min': PropTypes.number.isRequired,
    'max': PropTypes.number.isRequired
};