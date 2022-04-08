import {applyMiddleware, combineReducers, createStore} from 'redux';
import {hotelsReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import {watchLoadData} from './sagas';

const rootReducer = combineReducers({
  hotelsReducer: hotelsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLoadData);
