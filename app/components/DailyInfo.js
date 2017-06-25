import React, { PureComponent, PropTypes } from 'react';
import { Text, TemperatureRange, WindInfo } from '.';

export default class DailyInfo extends PureComponent {
    render() {
        const { title, date, tempMin, tempMax, description, wind } = this.props;

        return (
        <div className="daily-info">
            <Text
                className="title"
                text={title}
            />
            <Text
                className="date"
                text={date}
            />
            <TemperatureRange min={tempMin} max={tempMax} />
            <Text  className="description" text={description} />
            <WindInfo label="Wind" speed={wind} />
        </div>
        );
    }
}

DailyInfo.propTypes = {
    'title': PropTypes.string.isRequired,
    'date': PropTypes.string.isRequired,
    'description': PropTypes.string.isRequired,
    'tempMin': PropTypes.number.isRequired,
    'tempMax': PropTypes.number.isRequired,
    'wind': PropTypes.number.isRequired
};