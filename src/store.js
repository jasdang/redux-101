import {createStore, combineReducers} from 'redux';
import {todos} from './todos/reducers';

const reducers = {todos};

const rootReducer = combinerReducers(reducers);

export const configureStore = () => createStore(rootReducer);
