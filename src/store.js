import {createStore, combineReducers} from 'redux';

const reducers = {};

const rootReducer = combinerReducers(reducers);

export const configureStore = () => createStore(rootReducer);
