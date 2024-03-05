import {combineReducers} from '@reduxjs/toolkit';
import {CounterReducer} from './Counter';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  counter: CounterReducer,
});

export type RootState = ReturnType<typeof reducers>;
