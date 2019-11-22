import { all } from 'redux-saga/effects';

import checkin from './checkin/sagas';
import helporder from './helporder/sagas';

export default function* rootSaga() {
  return yield all([checkin, helporder]);
}
