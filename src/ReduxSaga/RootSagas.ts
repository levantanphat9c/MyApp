import {all, takeEvery} from 'redux-saga/effects';
import {CounterActions, incrementSaga} from './Counter';

// tslint:disable:max-func-body-length
export default function* root() {
  yield all([takeEvery(CounterActions.incrementSaga.type, incrementSaga)]);
}
