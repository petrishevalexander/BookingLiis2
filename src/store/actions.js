import {SET_HOTELS, LOAD_DATA, SET_FAV_HOTELS} from './types';

export const setHotels = payload => ({
  type: SET_HOTELS,
  payload: payload,
});

export const loadData = payload => ({
  type: LOAD_DATA,
  payload: payload,
});

export const setFavHotels = payload => ({
  type: SET_FAV_HOTELS,
  payload: payload,
});
