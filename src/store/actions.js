import {SET_HOTELS, LOAD_DATA, TOGGLE_SELECTED} from './types';

export const setHotels = payload => ({
  type: SET_HOTELS,
  payload: payload,
});

export const loadData = payload => ({
  type: LOAD_DATA,
  payload: payload,
});

export const toggleSelected = payload => ({
  type: TOGGLE_SELECTED,
  payload: payload,
});
