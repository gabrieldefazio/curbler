

import * as types from './types';

export function addToFavorite(itemId) {
  return {
    type: types.ADD_TO_FAVORITE,
    itemId,
  }
}