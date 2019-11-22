import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  loadCheckingsRequest,
  loadCheckingsSuccess,
  loadCheckingsFailure,
  createCheckinSuccess,
  createCheckinFailure,
} from './actions';

export function* loadCheckins({ payload }) {
  try {
    const { id } = payload;

    const response = yield api.get(`/students/${id}/checkins`);

    if (response) {
      yield put(loadCheckingsSuccess(response.data));
    }
  } catch (error) {
    Alert.alert(
      'Falha ao carregar Checkins',
      'Não foi possível carregar os checkins.'
    );
    yield put(loadCheckingsFailure());
  }
}

export function* createCheckin({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'checkins', { student_id: id });

    if (response) {
      yield put(createCheckinSuccess(response.data.checkin_count));
      yield put(loadCheckingsRequest(id));
    }
  } catch (error) {
    Alert.alert(
      'Falha ao fazer checkin',
      'Não é possível fazer mais checkins.'
    );
    yield put(createCheckinFailure());
  }
}

export default all([
  takeLatest('@checkin/LOAD_CHECKINS_REQUEST', loadCheckins),
  takeLatest('@checkin/CREATE_CHECKIN_REQUEST', createCheckin),
]);
