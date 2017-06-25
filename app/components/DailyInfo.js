import React, { PureComponent, PropTypes } from 'react';
import { Text, TemperatureRange, WindInfo, Image } from '.';
import { OPEN_WEATHER_MAP_ICON_URL } from '../constants/utils';

export default class DailyInfo extends PureComponent {
    render() {
        const { title, date, icon, tempMin, tempMax, description, wind } = this.props;

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
            <Image src={`${OPEN_WEATHER_MAP_ICON_URL}${icon}.png`} width={50} height={50} />
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
    'icon': PropTypes.string.isRequired,
    'tempMin': PropTypes.number.isRequired,
    'tempMax': PropTypes.number.isRequired,
    'wind': PropTypes.number.isRequired
};