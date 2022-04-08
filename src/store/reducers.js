import {SET_FAV_HOTELS, SET_HOTELS} from './types';

const initialState = {
  data: [],
  favourite: [],
};

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        data: [...action.payload],
      };
    case SET_FAV_HOTELS:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    default:
      return state;
  }
};
