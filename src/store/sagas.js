import React from 'react';
import {call, put, takeEvery} from 'redux-saga/effects';
import {setHotels} from './actions';
import {LOAD_DATA} from './types';

function fetchData(data) {
  return fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${data.city}&currency=rub&checkIn=${data.dateCheckIn}&checkOut=${data.dateCheckOut}&limit=10`,
  ).then(response => {
    return response.json();
  });
}

function* warkerLoadData(action) {
  const data = yield call(fetchData, action.payload);
  yield put(setHotels(data));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, warkerLoadData);
}
