import { Alert } from 'react-native';
import { takeLatest, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { loadHelpordersSuccess, loadHelpordersFailure } from './actions';

export function* loadHelporders({ payload }) {
  try {
    const { id } = payload;
    console.tron.log('Minha resposta no saga de load Help');
    const response = yield api.get(`/students/${id}/help-orders`);

    console.tron.log(response.data);

    if (response) {
      yield put(loadHelpordersSuccess(response.data));
    }
  } catch (error) {
    Alert.alert(
      'Falha ao carregar Pedidos ajuda',
      'Não foi possível carregar os pedidos de ajuda.'
    );
    yield put(loadHelpordersFailure());
  }
}

export default all([
  takeLatest('@helporder/LOAD_HELPORDERS_REQUEST', loadHelporders),
]);
