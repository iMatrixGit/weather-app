import Immutable from 'immutable';
import { createSelector } from 'reselect'

export const aggregatedTempSelector = createSelector(
    state => state.forecast.get('days'),
    days => {
        const min = days
            .sortBy(day => day.getIn(['temp', 'min']))
            .take(2).map(day => day.getIn(['temp', 'min']));
        const max = days
            .sortBy(day => day.getIn(['temp', 'max']))
            .takeLast(2).map(day => day.getIn(['temp', 'max']));

        return Immutable.Map({ min, max })
    }
);