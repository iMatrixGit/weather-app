import { createSelector } from 'reselect'

export const aggregatedMaxTempSelector = createSelector(
    state => state.forecast.get('days'),
    days => days
      .sortBy(day => day.get('max'))
      .takeLast(2).map(day => day.get('max'))
)

export const aggregatedMinTempSelector = createSelector(
  state => state.forecast.get('days'),
  days => days
    .sortBy(day => day.get('min'))
    .take(2).map(day => day.get('min'))
)