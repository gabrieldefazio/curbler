import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const addedToFavorite = createReducer([], {
  [types.ADD_TO_FAVORITE](state, action) {
    return state;
  }
});