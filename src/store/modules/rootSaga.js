import { all } from 'redux-saga/effects';

import checkin from './checkin/sagas';

export default function* rootSaga() {
  return yield all([checkin]);
}
