import {PayloadAction} from '@reduxjs/toolkit';
import {put} from 'redux-saga/effects';
import {CounterActions} from '.';

export function* incrementSaga(_action: PayloadAction<any>) {
  try {
    yield put(CounterActions.increment());
  } catch (error) {
    yield put(CounterActions.decrement());
  }
}
