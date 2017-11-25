import Immutable from 'immutable'
import { CLEAR_FORECAST_DATA, CONSUME_FORECAST_DATA } from '../constants/forecast'

const parseDayData = ({dt, speed, temp, weather}) => {
  const {min, max} = temp
  const [info] = weather
  const {description, icon} = info

  return {dt, speed, min, max, description, icon}
}

const initialState = Immutable.Map({
  days: Immutable.List()
})

const parseDays = days => days.map(parseDayData)

export default function (state = initialState, action) {
  switch (action.type) {
    case CONSUME_FORECAST_DATA:
      state = state.mergeDeep({
        days: parseDays(action.payload.days)
      })
      break
    case CLEAR_FORECAST_DATA:
      state = initialState
      break
    default:
      break
  }

  return state
}