import React from 'react';
import { render } from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { userHelps } from '../../__mocks__/helporder/list';

import HelpOrderList from '~/pages/HelpOrder/List';
import HelpOrderCreate from '~/pages/HelpOrder/Create';
import HelpOrderResponse from '~/pages/HelpOrder/Response';

const sagaMiddleware = createSagaMiddleware();

// https://github.com/dmitry-zaets/redux-mock-store/issues/59
const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore({
  helporder: {
    allHelporders: userHelps,
    loading: false,
    error: '',
  },
});

const navigation = {
  navigate: jest.fn(),
  getParam: item => {
    return userHelps[0];
  },
};

describe('HelpOrder List', () => {
  it('should render Help Order List', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HelpOrderList navigation={navigation} />
      </Provider>
    );

    expect(getByText('Novo pedido de auxílio')).toBeTruthy();
  });

  it('should load Help Order List', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HelpOrderList navigation={navigation} />
      </Provider>
    );

    expect(getByText('Olá como faço para ficar grandão?')).toBeTruthy();
    expect(getByText('Olá, eu já estou giga?')).toBeTruthy();
  });
});

describe('HelpOrder Create', () => {
  it('should render Help Order Create', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HelpOrderCreate navigation={navigation} />
      </Provider>
    );

    expect(getByText('Enviar Pedido')).toBeTruthy();
  });
});

describe('HelpOrder Response', () => {
  it('should render Help Order Response', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HelpOrderResponse navigation={navigation} />
      </Provider>
    );

    expect(getByText('Pergunta')).toBeTruthy();
    expect(getByText('Resposta')).toBeTruthy();
  });

  it('should load Help Order Response', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HelpOrderResponse navigation={navigation} />
      </Provider>
    );

    expect(getByText('Cara, tem que comer muito peito de frango')).toBeTruthy();
  });
});
