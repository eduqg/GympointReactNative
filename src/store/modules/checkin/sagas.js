import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { createCheckinSuccess, createCheckinFailure } from './actions';

export function* createCheckin({ payload }) {
  try {
    const { id } = payload;
    console.tron.log(`Chegou no saga o id:`);
    console.tron.log(id);

    const response = yield call(api.post, 'checkins', { student_id: id });
    console.tron.log(response.data);

    yield put(createCheckinSuccess(response.data.checkin_count));
  } catch (error) {
    Alert.alert(
      'Falha ao fazer checkin',
      'Não é possível fazer mais checkins.'
    );
    yield put(createCheckinFailure());
  }
}

export default all([
  takeLatest('@checkin/CREATE_CHECKIN_REQUEST', createCheckin),
]);
