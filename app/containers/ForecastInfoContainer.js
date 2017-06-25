import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DailyInfo } from '../components';
import { fetchForecast } from '../actions/forecast';
import { getDayFullName, getFormattedDate } from '../utils/date';

class ForecastInfoContainer extends PureComponent {
    constructor() {
        super();

        this.renderDailyInfo = this.renderDailyInfo.bind(this)
    }

    componentWillMount() {
        const { fetchForecast } = this.props;

        fetchForecast({ by: 'location' });
    }

    renderDailyInfo(day) {
        const { dt, speed, temp, weather } = day.toObject();

        return (
            <DailyInfo
                key={dt}
                title={getDayFullName(dt)}
                date={getFormattedDate(dt)}
                description={weather.getIn([0, 'description'])}
                wind={speed}
                tempMin={temp.get('min')}
                tempMax={temp.get('max')}
            />
        )
    }

    render() {
        const { days } = this.props;

        if (!days.size) {
            return null;
        }

        return (
            <div className="days-info-wrapper">
                { days.map(this.renderDailyInfo) }
            </div>
        );
    }
}

ForecastInfoContainer.defaultProps = {
    'days': {}
};

ForecastInfoContainer.propTypes = {
    'days': PropTypes.object.isRequired
};

export default connect(
    state => ({
        days: state.forecast.get('days')
    }),
    dispatch => bindActionCreators({
        fetchForecast
    }, dispatch)
)(ForecastInfoContainer);